const cliProgress = require('cli-progress')

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
   * @returns {Array} - Array of reports
   */
  _startAnalyzer(dataList, rules) {
    return new Promise(async (resolve, reject) => {
      const consoleProgressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
      const result = [];
      
      // Start the progress bar
      consoleProgressBar.start(dataList.length, 0);
      
      for (const item of dataList) {
        const report = await this._checkDOM(item.dom, rules)
        
        // Update the progress bar
        consoleProgressBar.increment();
        
        if (report && report.length) {
          result.push({
            file: item.file,
            report
          });
        }
      }

      // Stop the progress bar
      consoleProgressBar.stop();

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
        let report = null;
        try {
          report = await item.rule(dom, item.options);
        } catch(error) {
          report = error;
        }
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
