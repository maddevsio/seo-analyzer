import cliProgress from 'cli-progress';
import _colors from 'colors';

class Analyzer {
  constructor() {
    this.consoleProgressBar = new cliProgress.Bar({
      format: 'Handling files by rules |' + _colors.green('{bar}') + '| {percentage}% || {value}/{total} Rules',
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true
    });
  }

  /**
   * Run analyzer for a list of doms
   * @param {JSDOM<array>} doms - The html dom list to run the rule on
   * @param {Array} rules - The rules to run
   * @returns {Array} - Array of error result [{ file, report }, { file, report }, { file, report }]
   */
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
   * @param {Array} dataList - html doms
   * @param {Array} rules - List rulers
   * @returns {Array} - Array of reports [{file, report}, {file, report}, {file, report}]
   */
  _startAnalyzer(dataList, rules) {
    return new Promise(async (resolve, reject) => {
      const result = [];
      for (const item of dataList) {

        console.log(`\n${_colors.blue('==>')} Analysis ${_colors.white(item.file)}`);

        const report = await this._analyzeDOM(item.dom, rules);
        
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
   * Run analyzer for a single dom
   * @param {*} dom - The html dom element to run the rule on
   * @param {*} rules - The rules to run
   * @returns {Array} - Array of error result ['error', 'error', 'error']
   */
  _analyzeDOM(dom, rules) {
    return new Promise(async (resolve, reject) => {
      const result = [];
      // Start the progress bar
      this.consoleProgressBar.start(rules.length, 0);

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

        // Update the progress bar
        this.consoleProgressBar.increment();

      }

      // Stop the progress bar
      this.consoleProgressBar.stop();

      resolve(result);
    });
  }
}

export default Analyzer;
