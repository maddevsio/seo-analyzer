class Analyzer {
  constructor() {}

  run(inputData) {
    return new Promise(async (resolve, reject) => {
      if (!Array.isArray(inputData)) {
        console.log('Input data is not a array');
        reject();
      }
      if (inputData.length === 0) {
        console.log('Input data is empty');
        reject();
      }
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
