import cliProgress, { SingleBar } from 'cli-progress';
import _colors from 'colors';
import { JSDOM } from 'jsdom';
import { IInputData, IRule } from '../interfaces';

import Logger from './logger';

const BAD_TYPE_MESSAGE =
  'The inputFiles function takes an array only ["index.html", "...", "..."]';
const EMPTY_LIST_MESSAGE =
  'You need to pass an array to the inputFiles function ["index.html", "...", "..."]';

/**
 * Results returned by analyzer
 * @typedef {Array<{source: string, report: string}>} AnalyzerResult
 */

class Analyzer {
  logger: Logger;
  consoleProgressBar: SingleBar;
  constructor(logger: Logger) {
    this.logger = logger ?? new Logger();
    this.consoleProgressBar = new cliProgress.Bar({
      format:
        'Running rules |' +
        _colors.green('{bar}') +
        '| {percentage}% || {value}/{total} Rules',
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true
    });
  }

  /**
   * @param {Array} inputData - html doms
   * @param {Array} rules - List rulers
   * @returns {AnalyzerResult} - Array of reports [{source, report}, {source, report}, {source, report}]
   */
  private async startAnalyzer(inputData: IInputData[], rules: IRule[]) {
    const result = [];
    for (const item of inputData) {
      this.logger.info(
        `\n${_colors.blue('==>')} Analysis ${_colors.white(item.source)}`
      );

      const report = await this.analyzeDOM(item.dom, rules);

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
   * @returns {Array<string>} - Array of error result ['error', 'error', 'error']
   */
  private async analyzeDOM(dom: JSDOM, rules: IRule[]) {
    const result = [];
    // Start the progress bar
    this.logger.level <= 4 && this.consoleProgressBar.start(rules.length, 0);

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
      this.logger.level <= 4 && this.consoleProgressBar.increment();
    }

    // Stop the progress bar
    this.logger.level <= 4 && this.consoleProgressBar.stop();
    return result;
  }

  /**
   * Run analyzer for a list of doms
   * @param {JSDOM<array>} doms - The html dom list to run the rule on
   * @param {Array} rules - The rules to run
   * @returns {AnalyzerResult} - Array of error result [{ source, report }, { source, report }, { source, report }]
   */
  async run(inputData: IInputData[], rules: IRule[]) {
    if (inputData.length === 0) {
      this.logger.error(EMPTY_LIST_MESSAGE);
    }
    if (!Array.isArray(inputData)) {
      this.logger.error(BAD_TYPE_MESSAGE);
    }
    const report = await this.startAnalyzer(inputData, rules);
    return report;
  }
}

export default Analyzer;
