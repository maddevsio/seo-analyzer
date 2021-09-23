import Analyzer from './analyzer'

class Output {
  constructor() {
    this.analyzer = new Analyzer();
  }

  json(inputData, rules) {
    return new Promise(async (resolve, reject) => {
      const report = await this._generateJson(inputData, rules);
      resolve(report);
    });
  }

  /**
   * @param {Array} data
   * @returns {Object}
   */
  _generateJson(data, rules) {
    return new Promise(async (resolve, reject) => {
      const report = await this.analyzer.run(data, rules);
      resolve(report);
    });
  }
}

export default Output;
