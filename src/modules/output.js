class Analyzer {
  constructor() {}

  run(inputData) {
    return new Promise(async (resolve, reject) => {
      const report = await this._generateJson(inputData);
      resolve(report);
    });
  }

  /**
   * @param {Array} data
   * @returns {Object}
   */
  _generateJson(data) {
    return new Promise(async (resolve, reject) => {
      resolve(data);
    });
  }
}

export default Analyzer;
