import defaultRules from './rules/index';

import Input from './modules/input';
import Output from './modules/output';
import Logger from './modules/logger';

import { startServer } from './server';

class SeoAnalyzer {
  constructor() {
    this._logger = new Logger();
    this._input = new Input();
    this._output = new Output();
    this._nextServer = null;
    this._inputData = [];
    this._defaultRules = defaultRules;
    this._rules = [];
    this._ignoreFolders = [];
    this._ignoreFiles = [];
    this._ignoreUrls = [];
    return this;
  }

  // --------- Ignore methods --------- //
  ignoreFiles(files) {
    this._ignoreFiles = files;
    return this;
  }

  ignoreFolders(folders) {
    this._ignoreFolders = folders;
    return this;
  }

  ignoreUrls(urls) {
    this._ignoreUrls = urls;
    return this;
  }

  // ------- Input methods ------- //
  async inputFiles(files) {
    if (this._inputData.length !== 0) return this;
    this._logger.printTextToConsole('SEO Analyzer');
    this._inputData = await this._input.files(files, this._ignoreFiles);
    return this;
  }

  async inputFolders(folders) {
    if (this._inputData.length !== 0) return this;
    this._logger.printTextToConsole('SEO Analyzer');
    this._inputData = await this._input.folders(
      folders,
      this._ignoreFolders,
      this._ignoreFiles
    );
    return this;
  }

  async inputSpaFolder(folder, sitemap='sitemap.xml', port = 9999) {
    if (!this._inputData) return this;
    this._logger.printTextToConsole('SEO Analyzer');
    // Run server for spa
    startServer(folder, port);
    this._inputData = await this._input.spa(port, this._ignoreUrls, sitemap);
    return this;
  }

  async inputNextJs(sitemap='sitemap.xml', port = 3000) {
    if (!this._inputData) return this;
    if (!this._nextServer) {
      const { default: NextServer }  = await import('./modules/next-server');
      this._nextServer = new NextServer();
      await this._nextServer.setup();
    }
    this._logger.printTextToConsole('SEO Analyzer');
    this._inputData = await this._nextServer.inputSSR(port, this._ignoreUrls, sitemap);
    return this;
  }

  /**
   * Input plain HTML strings in {text, source} format
   * @param {Array<{text: string, source: string}>} inputHTMLs `text` is the plain html, `source` is an identifier such a URI
   * @returns {SeoAnalyzer}
   */
  inputHTMLStrings(inputHTMLs) {
    if (this._inputData.length !== 0) return this;
    if (!inputHTMLs || !inputHTMLs.length 
      || inputHTMLs.some(html => typeof html.text === 'undefined' || typeof html.source === 'undefined')) {
      const error = `Invalid input ${inputHTMLs}`;
      this._logger.error(error);
      throw error;
    }
    this._logger.printTextToConsole('SEO Analyzer');
    this._inputData = this._input.getDom(inputHTMLs);
    return this;
  }

  // --------- Add Rule --------- //
  addRule(func, options = {}) {
    if (typeof func === 'string') {
      if (func in defaultRules) {
        this._rules.push({ rule: defaultRules[func], options });
      } else {
        this._logger.error(`\n\n❌  Rule "${func}" not found\n`, 1);
      }
    } else if (typeof func === 'function') {
      this._rules.push({ rule: func, options });
    } else {
      this._logger.error('\n\n❌  Rule must be a function or a string\n', 1);
    }
    return this;
  }

  // ------- Output methods ------- //
  outputConsole() {
    (async () => {
      const json = await this._output.object(this._inputData, this._rules);
      this._logger.result(json);
    })();
    return this;
  }

  outputJson(callback) {
    (async () => {
      const json = await this._output.json(this._inputData, this._rules);
      callback(json);
    })();
    return this;
  }

  async outputJsonAsync() {
    return this._output.json(this._inputData, this._rules);
  }

  outputObject(callback) {
    (async () => {
      const obj = await this._output.object(this._inputData, this._rules);
      callback(obj);
    })();
    return this;
  }

  async outputObjectAsync() {
    return this._output.object(this._inputData, this._rules);
  }
}

export default SeoAnalyzer;
