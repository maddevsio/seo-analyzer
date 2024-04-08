import defaultRules from './rules/index';
import {
  ISeoAnalyzerOptions,
  IRule,
  IInputData,
  IInputHtml,
  TRuleFunc
} from './interfaces';
import Input from './modules/input';
import Output from './modules/output';
import Logger from './modules/logger';

import { startServer } from './server';

/**
 * @typedef {import('./modules/analyzer').AnalyzerResult} AnalyzerResult
 */

class SeoAnalyzer {
  /**
   * @param {object} options - The options object.
   * @param {boolean} [options.verbose=true] - A flag indicating whether verbose mode is enabled.
   * @returns {SeoAnalyzer}
   */
  options: ISeoAnalyzerOptions | undefined;
  logger: Logger;
  input: Input;
  output: Output;
  inputDataList: IInputData[];
  defaultRulesList: typeof defaultRules;
  rules: IRule[];
  ignoreFoldersList: string[];
  ignoreFilesList: string[];
  ignoreUrlsList: string[];
  operations: Function[];
  constructor(options: ISeoAnalyzerOptions = { verbose: true }) {
    this.options = options;
    this.logger = new Logger(options?.verbose ? 'default' : 'error');
    this.input = new Input(this.logger);
    this.output = new Output(this.logger);
    this.inputDataList = [];
    this.defaultRulesList = defaultRules;
    this.rules = [];
    this.ignoreFoldersList = [];
    this.ignoreFilesList = [];
    this.ignoreUrlsList = [];
    this.operations = [];
    return this;
  }

  // --------- Ignore methods --------- //
  /**
   * List of files to ignore.
   * @param {Array<string>} files
   * @returns {SeoAnalyzer}
   */
  public ignoreFiles(files: string[]) {
    this.ignoreFilesList = files;
    return this;
  }

  /**
   * List of directories to ignore.
   * @param {Array<string>} folders
   * @returns {SeoAnalyzer}
   */
  public ignoreFolders(folders: string[]) {
    this.ignoreFoldersList = folders;
    return this;
  }

  /**
   * List of urls to be ignored
   * @param {Array<string>} urls to be ignored
   * @returns {SeoAnalyzer}
   */
  public ignoreUrls(urls: string[]) {
    this.ignoreUrlsList = urls;
    return this;
  }

  // ------- Input methods ------- //
  /**
   * Files to analyze
   * @param {Array<string>} files
   * @returns {Promise<SeoAnalyzer>}
   */
  public inputFiles(files: string[]) {
    this.operations.push(async () => {
      const result = await this.input.files(files, this.ignoreFilesList);
      this.inputDataList = [...this.inputDataList, ...result];
    });
    return this;
  }

  /**
   * Directories to analyze
   * @param {Array<string>} folders
   * @returns {Promise<SeoAnalyzer>}
   */
  public inputFolders(folders: string[]) {
    this.operations.push(async () => {
      const result = await this.input.folders(
        folders,
        this.ignoreFoldersList,
        this.ignoreFilesList
      );
      this.inputDataList = [...this.inputDataList, ...result];
    });
    return this;
  }

  /**
   * Spa folder to analyze
   * @param {Array<string>} folder - "dist" to analyze
   * @returns {Promise<SeoAnalyzer>}
   */
  public inputSpaFolder(folder: string, sitemap = 'sitemap.xml', port = 9999) {
    if (!this.inputDataList) return this;
    this.operations.push(async () => {
      // Run server for spa
      startServer(folder, port);
      const result = await this.input.spa(port, this.ignoreUrlsList, sitemap);
      this.inputDataList = [...this.inputDataList, ...result];
      return this;
    });
    return this;
  }

  /**
   * Input plain HTML strings in {text, source} format to analyze
   * @param {Array<{text: string, source: string}>} inputHTMLs `text` is the plain html, `source` is an identifier such a URI
   * @returns {SeoAnalyzer}
   */
  public inputHTMLStrings(inputHTMLs: IInputHtml[]) {
    if (
      !inputHTMLs ||
      !inputHTMLs.length ||
      inputHTMLs.some(
        html =>
          typeof html.text === 'undefined' || typeof html.source === 'undefined'
      )
    ) {
      const error = `Invalid input ${inputHTMLs}`;
      this.logger.error(error);
      throw error;
    }
    const result = this.input.getDom(inputHTMLs);
    this.inputDataList = [...this.inputDataList, ...result];
    return this;
  }

  /**
   * Input urls to analyze
   * @param {string} host
   * @param {Array<string>} urls
   * @returns {SeoAnalyzer}
   * @example inputUrls(['https://google.com', 'https://maddevs.io'])
   */
  public inputUrls(urls: string[]) {
    this.operations.push(async () => {
      if (!urls || !urls.length) {
        this.logger.error('Urls not found');
      } else {
        const result = await this.input.urls(urls);
        this.inputDataList = [...this.inputDataList, ...result];
      }
    });
    return this;
  }

  // --------- Add Rule --------- //
  /**
   * Use a default rule to the SEO analyzer.
   * @param {string} rule The default rule or a custom rule function.
   * @param {object} [options={}] Additional options for the rule.
   * @returns {this} The SEO analyzer instance for method chaining.
   */
  public useRule(rule: string, options = {}) {
    if (typeof rule === 'string') {
      if (rule in defaultRules) {
        this.rules.push({
          rule: defaultRules[rule as keyof typeof defaultRules],
          options
        });
      } else {
        this.logger.error(`\n\n❌  Rule "${rule}" not found\n`, false);
      }
    }
    return this;
  }

  /**
   * Adds a rule to the SEO analyzer.
   * @param {TRuleFunc} rule The default rule or a custom rule function.
   * @param {object} [options={}] Additional options for the rule.
   * @returns {this} The SEO analyzer instance for method chaining.
   */
  public addRule(rule: TRuleFunc, options = {}) {
    if (typeof rule === 'function') {
      this.rules.push({ rule, options });
    } else {
      this.logger.error('\n\n❌  Rule must be a function or a string\n', false);
    }
    return this;
  }

  /**
   * Get default rules
   * @returns {object}
   */
  public getDefaultRules() {
    return this.defaultRulesList;
  }

  // ------- Output methods ------- //
  /**
   * Logs object to console asynchronously and returns itself
   * @returns {SeoAnalyzer}
   */
  public outputConsole() {
    this.operations.push(async () => {
      const json = await this.output.object(this.inputDataList, this.rules);
      this.logger.result(json, true);
    });
    return this;
  }

  /**
   * Returns itself and calls a callback on the output's json string
   * @param {function(string): void}
   * @returns {SeoAnalyzer}
   */
  public outputJson(callback: Function) {
    this.operations.push(async () => {
      const json = await this.output.json(this.inputDataList, this.rules);
      callback(json);
    });
    return this;
  }

  /**
   * Returns itself and calls a callback on the output's object
   * @param {function(AnalyzerResult): void}
   * @returns {SeoAnalyzer}
   */
  public outputObject(callback: Function) {
    this.operations.push(async () => {
      const obj = await this.output.object(this.inputDataList, this.rules);
      callback(obj);
    });
    return this;
  }

  // --------- Runner --------- //
  /**
   * Runs all operations
   * @returns {Promise<void>}
   */
  public async run() {
    this.logger.printTextToConsole('SEO Analyzer');
    for (const operation of this.operations) {
      await operation();
    }
  }
}

export default SeoAnalyzer;
