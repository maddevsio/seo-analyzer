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
   * @param {Array} data
   * @param {Array} rules
   * @returns {Array}
   */
  _startAnalyzer(data, rules) {
    return new Promise(async (resolve, reject) => {
      const result = [];
      for (const dom of data) {
        result.push(await this._checkDOM(dom, rules));
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
      for (const rule of rules) {
        result.push(await rule(dom));
      }
      resolve(result);
    });
  }
}

export default Analyzer;
