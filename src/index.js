import defaultRules from './rules/index';

import Input from './modules/input'
import Output from './modules/output'
import Logger from './modules/logger'

class SeoAnalyzer {
  constructor () {
    this.logger = new Logger();
    this.input = new Input();
    this.output = new Output();
    this.inputData = [];
    this.rules = [];
    this._ignoreFolders = [];
    this._ignoreFiles = [];
    return this;
  }
  
  //--------- Ignore methods ---------//
  ignoreFolders(folders) {
    this._ignoreFolders = folders;
    return this;
  }

  ignoreFiles(files) {
    this._ignoreFiles = files;
    return this;
  }
  // -------------------------------//

  // ------- Input methods ------- // 
  inputFiles(files) {
    this.logger.printTextToConsole('Seo Analyzer');
    this.inputData = this.input.files(files, this._ignoreFiles);
    return this;
  }
  
  inputUrls(urls) {
    this.logger.printTextToConsole('Seo Analyzer');
    this.inputData = this.input.urls(urls);
    return this;
  }
  
  inputFolders(folders) {
    this.logger.printTextToConsole('Seo Analyzer');
    this.inputData = this.input.folders(folders, this._ignoreFolders, this._ignoreFiles);
    return this;
  }
  // ------------------------------ //
  
  // --------- Add Rule --------- //
  addRule(func, options = {}) {
    if (typeof func === 'string') {
      if (func in defaultRules) {
        this.rules.push({ 'rule': defaultRules[func], options });
      }
    } else {
      this.rules.push({ 'rule': func, options });
    }
    return this;
  }
  // ----------------------------- //
  
  // ------- Output methods ------- //
  outputConsole() {
    (async() => {
      const json = await this.output.object(await this.inputData, this.rules);
      this.logger.result(json);
    })();
    return this;
  }

  outputJson(callback) {
    (async() => {
      const json = await this.output.json(await this.inputData, this.rules);
      callback(json);
    })();
    return this;
  }

  outputObject(callback) {
    (async() => {
      const obj = await this.output.object(await this.inputData, this.rules);
      callback(obj);
    })();
    return this;
  }
}

export default SeoAnalyzer
