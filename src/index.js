import defaultRules from './rules/index';

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
  constructor({ verbose } = { verbose: true }) {
    this._logger = new Logger(verbose ? 'default' : 'error');
    this._input = new Input(this._logger);
    this._output = new Output(this._logger);
    this._nextServer = null;
    this._inputData = [];
    this._defaultRules = defaultRules;
    this._rules = [];
    this._ignoreFolders = [];
    this._ignoreFiles = [];
    this._ignoreUrls = [];
    this.operations = [];
    return this;
  }

  // --------- Ignore methods --------- //
  /**
   * List of files to ignore.
   * @param {Array<string>} files
   * @returns {SeoAnalyzer}
   */
  ignoreFiles(files) {
    this._ignoreFiles = files;
    return this;
  }

  /**
   * List of directories to ignore.
   * @param {Array<string>} folders
   * @returns {SeoAnalyzer}
   */
  ignoreFolders(folders) {
    this._ignoreFolders = folders;
    return this;
  }

  /**
   * List of urls to be ignored
   * @param {Array<string>} urls to be ignored
   * @returns {SeoAnalyzer}
   */
  ignoreUrls(urls) {
    this._ignoreUrls = urls;
    return this;
  }

  // ------- Input methods ------- //
  /**
   * Files to analyze
   * @param {Array<string>} files
   * @returns {Promise<SeoAnalyzer>}
   */
  inputFiles(files) {
    if (this._inputData.length !== 0) return this;
    this.operations.push(async () => {
      this._logger.printTextToConsole('SEO Analyzer');
      this._inputData = await this._input.files(files, this._ignoreFiles);
    });
    return this;
  }

  /**
   * Directories to analyze
   * @param {Array<string>} folders
   * @returns {Promise<SeoAnalyzer>}
   */
  inputFolders(folders) {
    if (this._inputData.length !== 0) return this;
    this.operations.push(async () => {
      this._logger.printTextToConsole('SEO Analyzer');
      this._inputData = await this._input.folders(
        folders,
        this._ignoreFolders,
        this._ignoreFiles
      );
    });
    return this;
  }

  /**
   * Spa folder to analyze
   * @param {Array<string>} folder
   * @returns {Promise<SeoAnalyzer>}
   */
  inputSpaFolder(folder, sitemap = 'sitemap.xml', port = 9999) {
    if (!this._inputData) return this;
    this.operations.push(async () => {
      this._logger.printTextToConsole('SEO Analyzer');
      // Run server for spa
      startServer(folder, port);
      this._inputData = await this._input.spa(port, this._ignoreUrls, sitemap);
    });
    return this;
  }

  /**
   * Scan Next server
   * @param {string} sitemap Path to sitemap in xml format
   * @param {number} port Port Next server listens on
   * @returns {Promise<SeoAnalyzer>}
   */
  inputNextJs(sitemap = 'sitemap.xml', port = 3000) {
    if (!this._inputData) return this;
    this.operations.push(async () => {
      if (!this._nextServer) {
        const { default: NextServer } = await import('./modules/next-server');
        this._nextServer = new NextServer(this._logger);
        await this._nextServer.setup();
      }
      this._logger.printTextToConsole('SEO Analyzer');
      this._inputData = await this._nextServer.inputSSR(
        port,
        this._ignoreUrls,
        sitemap
      );
    });
    return this;
  }

  /**
   * Input plain HTML strings in {text, source} format to analyze
   * @param {Array<{text: string, source: string}>} inputHTMLs `text` is the plain html, `source` is an identifier such a URI
   * @returns {SeoAnalyzer}
   */
  inputHTMLStrings(inputHTMLs) {
    this.operations.push(async () => {
      if (this._inputData.length !== 0) return this;
      if (
        !inputHTMLs ||
        !inputHTMLs.length ||
        inputHTMLs.some(
          html =>
            typeof html.text === 'undefined' ||
            typeof html.source === 'undefined'
        )
      ) {
        const error = `Invalid input ${inputHTMLs}`;
        this._logger.error(error);
        throw error;
      }
      this._logger.printTextToConsole('SEO Analyzer');
      this._inputData = this._input.getDom(inputHTMLs);
    });
    return this;
  }

  // --------- Add Rule --------- //
  /**
   * Adds a rule to the SEO analyzer.
   * @param {string|Function} rule The default rule or a custom rule function.
   * @param {object} [options={}] Additional options for the rule.
   * @returns {this} The SEO analyzer instance for method chaining.
   */
  addRule(rule, options = {}) {
    this.operations.push(async () => {
      if (typeof rule === 'string') {
        if (rule in defaultRules) {
          this._rules.push({ rule: defaultRules[rule], options });
        } else {
          this._logger.error(`\n\n❌  Rule "${rule}" not found\n`, 1);
        }
      } else if (typeof rule === 'function') {
        this._rules.push({ rule, options });
      } else {
        this._logger.error('\n\n❌  Rule must be a function or a string\n', 1);
      }
    });
    return this;
  }

  // ------- Output methods ------- //
  /**
   * Logs object to console asynchronously and returns itself
   * @returns {SeoAnalyzer}
   */
  outputConsole() {
    this.operations.push(async () => {
      const json = await this._output.object(this._inputData, this._rules);
      this._logger.result(json, true);
    });
    return this;
  }

  /**
   * Returns itself and calls a callback on the output's json string
   * @param {function(string): void}
   * @returns {SeoAnalyzer}
   */
  outputJson(callback) {
    this.operations.push(async () => {
      const json = await this._output.json(this._inputData, this._rules);
      callback(json);
    });
    return this;
  }

  /**
   * Returns the JSON output asynchronously
   * @returns {Promise<string>}
   */
  outputJsonAsync() {
    this.operations.push(async () => {
      this._output.json(this._inputData, this._rules);
    });
    return this;
  }

  /**
   * Returns itself and calls a callback on the output's object
   * @param {function(AnalyzerResult): void}
   * @returns {SeoAnalyzer}
   */
  outputObject(callback) {
    this.operations.push(async () => {
      const obj = await this._output.object(this._inputData, this._rules);
      callback(obj);
    });
    return this;
  }

  /**
   * Returns the object asynchronously
   * @returns {Promise<AnalyzerResult>}
   */
  outputObjectAsync() {
    this.operations.push(async () => {
      this._output.object(this._inputData, this._rules);
    });
    return this;
  }

  /**
   * Runs all operations
   * @returns {Promise<AnalyzerResult>}
   */
  async run() {
    for (const operation of this.operations) {
      await operation();
    }
    return this.product;
  }
}

export default SeoAnalyzer;
