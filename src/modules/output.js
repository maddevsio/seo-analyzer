import Analyzer from './analyzer';

class Output {
  constructor(logger) {
    this.analyzer = new Analyzer(logger);
  }

  /**
   * @param {Array} data - List of files and folders
   * @param {Array} rules - List of rules
   * @returns {Promise} - Returns js object [{source, report}, ...]
   */
  async object(inputData, rules) {
    const report = await this.analyzer.run(inputData, rules);
    return report;
  }

  /**
   * @param {Array} data - List of files and folders
   * @param {Array} rules - List of rules
   * @returns {JSON} - Returns json [{"source", "report"}, ...]
   */
  async json(inputData, rules) {
    const report = await this.analyzer.run(inputData, rules);
    return JSON.stringify(report, null, 2);
  }
}

export default Output;
