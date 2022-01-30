import cliProgress from 'cli-progress';
import _colors from 'colors';

class Analyzer {
  constructor() {
    this.consoleProgressBar = new cliProgress.Bar({
      format:
        'Running rules |' +
        _colors.green('{bar}') +
        '| {percentage}% || {value}/{total} Rules',
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true
    });
    this.badType =
      'The inputFiles function takes an array only ["index.html", "...", "..."]';
    this.emptyList =
      'You need to pass an array to the inputFiles function ["index.html", "...", "..."]';
  }

  /**
   * Run analyzer for a list of doms
   * @param {JSDOM<array>} doms - The html dom list to run the rule on
   * @param {Array} rules - The rules to run
   * @returns {Array} - Array of error result [{ file, report }, { file, report }, { file, report }]
   */
  async run(inputData, rules) {
    if (inputData.length === 0) {
      this.logger.error(this.emptyList);
    }
    if (!Array.isArray(inputData)) {
      this.logger.error(this.badType);
    }
    const report = await this._startAnalyzer(inputData, rules);
    return report;
  }

  /**
   * @param {Array} dataList - html doms
   * @param {Array} rules - List rulers
   * @returns {Array} - Array of reports [{file, report}, {file, report}, {file, report}]
   */
  async _startAnalyzer(dataList, rules) {
    const result = [];
    for (const item of dataList) {
      console.log(
        `\n${_colors.blue('==>')} Analysis ${_colors.white(item.source)}`
      );

      const report = await this._analyzeDOM(item.dom, rules);

      if (report && report.length) {
        result.push({
          source: item.source,
          report
        });
      }
    }

    return result;
  }

  /**
   * Run analyzer for a single dom
   * @param {*} dom - The html dom element to run the rule on
   * @param {*} rules - The rules to run
   * @returns {Array} - Array of error result ['error', 'error', 'error']
   */
  async _analyzeDOM(dom, rules) {
    const result = [];
    // Start the progress bar
    this.consoleProgressBar.start(rules.length, 0);

    for (const item of rules) {
      let report = null;
      try {
        report = await item.rule(dom, item.options);
      } catch (error) {
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

    return result;
  }
}

export default Analyzer;
