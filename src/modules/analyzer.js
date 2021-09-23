const cliProgress = require('cli-progress')

class Analyzer {
  constructor() {
    this.consoleProgressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  }

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

      // Start the progress bar
      this.consoleProgressBar.start(inputData.length, 0);

      const report = await this._startAnalyzer(inputData, rules);
      resolve(report);
    });
  }

  /**
   * @param {Array} dataList - html doms
   * @param {Array} rules - List rulers
   * @returns {Array} - Array of reports [{file: file, report: report}]
   */
  _startAnalyzer(dataList, rules) {
    return new Promise(async (resolve, reject) => {
      const result = [];
      for (const item of dataList) {
        const report = await this._analyzeDOM(item.dom, rules)
        
        // Update the progress bar
        this.consoleProgressBar.increment();
        
        if (report && report.length) {
          result.push({
            file: item.file,
            report
          });
        }
      }

      // Stop the progress bar
      this.consoleProgressBar.stop();

      resolve(result);
    });
  }

  /**
   * Run analyzer for a single dom
   * @param {*} dom - The html dom element to run the rule on
   * @param {*} rules - The rules to run
   * @returns {Array} - Array of error result ['error', 'error', 'error']
   */
  _analyzeDOM(dom, rules) {
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
