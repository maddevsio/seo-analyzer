import defaultRules from './rules/index';

import Input from './modules/input';
import Output from './modules/output';
import Logger from './modules/logger';
import NextServer from './modules/next-server';

import { startServer } from './server';

class SeoAnalyzer {
  constructor() {
    this._logger = new Logger();
    this._input = new Input();
    this._output = new Output();
    this._nextServer = new NextServer();
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
  inputFiles(files) {
    if (this._inputData.length !== 0) return this;
    this._logger.printTextToConsole('SEO Analyzer');
    this._inputData = this._input.files(files, this._ignoreFiles);
    return this;
  }

  inputFolders(folders) {
    if (this._inputData.length !== 0) return this;
    this._logger.printTextToConsole('SEO Analyzer');
    this._inputData = this._input.folders(
      folders,
      this._ignoreFolders,
      this._ignoreFiles
    );
    return this;
  }

  inputSpaFolder(folder, sitemap='sitemap.xml', port = 9999) {
    if (!this._inputData) return this;
    this._logger.printTextToConsole('SEO Analyzer');
    // Run server for spa
    startServer(folder, port);
    this._inputData = this._input.spa(port, this._ignoreUrls, sitemap);
    return this;
  }

  inputNextJs(sitemap='sitemap.xml', port = 3000) {
    if (!this._inputData) return this;
    this._logger.printTextToConsole('SEO Analyzer');
    this._inputData = this._nextServer.inputSSR(port, this._ignoreUrls, sitemap);
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
      const json = await this._output.object(await this._inputData, this._rules);
      this._logger.result(json);
    })();
    return this;
  }

  outputJson(callback) {
    (async () => {
      const json = await this._output.json(await this._inputData, this._rules);
      callback(json);
    })();
    return this;
  }

  outputObject(callback) {
    (async () => {
      const obj = await this._output.object(await this._inputData, this._rules);
      callback(obj);
    })();
    return this;
  }
}

export default SeoAnalyzer;
