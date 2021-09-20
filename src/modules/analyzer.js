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
        result.push({
          file: item.file,
          report: await this._checkDOM(item.dom, rules)
        });
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
        result.push(await item.rule(dom, item.options));
      }
      resolve(result);
    });
  }
}

export default Analyzer;
