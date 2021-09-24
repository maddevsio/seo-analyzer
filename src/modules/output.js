import Analyzer from './analyzer';

class Output {
  constructor() {
    this.analyzer = new Analyzer();
  }

  /**
   * @param {Array} data - List of files and folders
   * @param {Array} rules - List of rules
   * @returns {Promise} - Returns js object [{file, report}, ...]
   */
  object(inputData, rules) {
    return new Promise(async (resolve, reject) => {
      const report = await this.analyzer.run(inputData, rules);
      resolve(report);
    });
  }

  /**
   * @param {Array} data - List of files and folders
   * @param {Array} rules - List of rules
   * @returns {JSON} - Returns json [{"file", "report"}, ...]
   */
  json(inputData, rules) {
    return new Promise(async (resolve, reject) => {
      const report = await this.analyzer.run(inputData, rules);
      resolve(JSON.stringify(report, null, 2));
    });
  }
}

export default Output;
