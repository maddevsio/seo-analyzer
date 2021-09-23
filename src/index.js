import _ from 'lodash'
import defaultRules from './rules/index'

import Input from './modules/input'
import Analyzer from './modules/analyzer'
import Output from './modules/output'
import Logger from './modules/logger'

class SeoAnalyzer {
  constructor () {
    this.logger = new Logger();
    this.input = new Input();
    this.inputData = [];
    this.rules = [];
    return this;
  }

  // ------- Input functions ------- // 
  inputFiles(files) {
    this.inputData = this.input.files(files);
    return this;
  }

  inputUrls(urls) {
    this.inputData = this.input.urls(urls);
    return this;
  }

   inputFolders(folders) {
    this.inputData = this.input.folders(folders);
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
  
  // ------- Output functions ------- //
  outputConsole() {
    return (async() => {
      const json = await this._output();
      this.logger.result(json);
      return this;
    })();
  }

  outputJson(callback) {
    return (async() => {
      const json = await this._output();
      callback(json);
      return this;
    })();
  }

  _output() {
    return (async() => {
      const data = await this.inputData;
      const report = await new Analyzer().run(data, this.rules);
      const json = await new Output().run(report);
      return json;
    })();
  }
}

export default SeoAnalyzer
