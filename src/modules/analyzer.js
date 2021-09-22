class Analyzer {
  constructor() {}

  run(inputData, rules) {
    return new Promise(async (resolve, reject) => {
      if (!Array.isArray(inputData)) {
        console.log('Input data is not a array');
        reject();
      }
      if (inputData.length === 0) {
        console.log('Input data is empty');
        reject();
      }
      const report = await this._startAnalyzer(inputData, rules);
      resolve(report);
    });
  }

  /**
   * @param {Array} data - html doms
   * @param {Array} rules - List rulers
   * @returns {Array}
   */
  _startAnalyzer(data, rules) {
    return new Promise(async (resolve, reject) => {
      const result = [];
      for (const item of data) {
        const report = await this._checkDOM(item.dom, rules)
        if (report && report.length) {
          result.push({
            file: item.file,
            report
          });
        }
      }
      resolve(result);
    });
  }

  /**
   * Run the rule on the data
   * @param {*} dom - The html dom element to run the rule on
   * @param {*} rule - The rule to run
   * @returns {Array} - Array of result
   */
  _checkDOM(dom, rules) {
    return new Promise(async (resolve, reject) => {
      const result = [];
      for (const item of rules) {
        const report = await item.rule(dom, item.options)
        if (Array.isArray(report)) {
          result.push(...report);
        } else {
          if (report) {
            result.push(report);
          }
        }
      }
      resolve(result);
    });
  }
}

export default Analyzer;
