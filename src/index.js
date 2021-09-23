import _ from 'lodash'
import defaultRules from './rules/index'

import Input from './modules/input'
import Analyzer from './modules/analyzer'
import Output from './modules/output'
import Logger from './modules/logger'

class SeoAnalyzer {
  constructor (options = {}) {
    this.logger = new Logger();
    this.done = (_.has(options, ['done'])) ? options.done : (err) => { if (err) throw err }
    this.inputData = [];
    this.rules = [];
    return this
  }

  // ------- Input functions ------- // 
  inputFiles(files) {
    this.inputData = new Input().files(files);
    return this
  }

  inputUrls(urls) {
    this.inputData = new Input().urls(urls);
    return this
  }

   inputFolders(folders) {
    this.inputData = new Input().folders(folders);
    return this
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
    return this
  }
  // ----------------------------- //
  
  // ------- This is method run analyzer ------- //
  start() {
    return new Promise(async (resolve, reject) => {
      const data = await this.inputData;
      const report = await new Analyzer().run(data, this.rules);
      const json = await new Output().run(report);
      this.logger.result(json);
      resolve(this.done(null, json));
    });
  }
}

export default SeoAnalyzer
