import defaultRules from './rules/index'

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
      const json = await this.output.json(await this.inputData, this.rules);
      this.logger.result(json);
      return this;
    })();
  }

  outputJson(callback) {
    return (async() => {
      const json = await this.output.json(await this.inputData, this.rules);
      callback(json);
      return this;
    })();
  }
}

export default SeoAnalyzer
