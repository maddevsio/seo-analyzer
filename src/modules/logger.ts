import CFonts from 'cfonts';
import _colors from 'colors';
import { IResult } from '../interfaces';
import { LOGGER_LEVELS, LOGGER_LEVEL_DEFAULT } from '../config';

class Logger {
  /**
   * @param {string} level
   * @returns {Logger}
   */
  public level: number;
  constructor(level: string = LOGGER_LEVEL_DEFAULT) {
    this.level =
      level === LOGGER_LEVEL_DEFAULT ? 2 : LOGGER_LEVELS.indexOf(level);
  }

  /**
   * @param {Array} - Array of reports
   * @returns {Error} - Stop execution and print error
   * @private
   * @memberof Logger
   * @description Print result message to console
   */
  private logResult(result: IResult[]) {
    if (!result.some(r => r.report.length))
      return this.logSuccess('\n👍  No SEO defects detected.\n');

    this.logInfo('\n🚀  Issue report');

    for (const item of result) {
      this.logInfo(`\nSource: ${item.source.trim()}`);
      this.logError(`${item.report.join('\n')}`);
    }

    this.logSuccess(
      '\n-------- 🚀 Finished! --------\nThanks for using Seo Analyzer!\n'
    );

    return process.exit(1); // Stop process in terminal
  }

  /**
   * @param {String} - Error object
   * @returns {String} - Stop execution and print error
   * @private
   * @memberof Logger
   * @description Print error message to console
   */
  private logError(error: string) {
    console.error(`${_colors.red(error)}`);
  }

  /**
   * @param {String} - Error object
   * @returns {String} - Stop execution and print error
   * @private
   * @memberof Logger
   * @description Print error message to console
   */
  private logInfo(info: string) {
    console.log(`${_colors.yellow(info)}`);
  }

  /**
   * @param {String} - Message
   * @returns {String} - Print formatted message to console
   * @private
   * @memberof Logger
   */
  private logSuccess(success: string) {
    console.log(`${_colors.green(success)}`);
  }

  /**
   * Print formatted result to console
   * @param {Array} - Array of reports
   * @returns {Error} - Stop execution and print error
   */
  public result(result: IResult[], force = false) {
    if (this.level > 3 && !force) {
      return;
    }
    this.logResult(result);
  }

  /**
   * Print error message to console
   * @param {String} - Message
   * @returns {String} - Print formatted message to console
   */
  public error(error: string, exit?: boolean) {
    if (this.level > 5) {
      return;
    }
    this.logError(error);
    if (exit) process.exit(1);
  }

  /**
   * Print success message to console
   * @param {String} - Message
   * @returns {String} - Print formatted message to console
   */
  public success(success: string) {
    if (this.level > 4) {
      return;
    }
    this.logSuccess(success);
  }

  /**
   * Print info message to console
   * @param {String} - Message
   * @returns {String} - Print formatted message to console
   */
  public info(info: string) {
    if (this.level > 2) {
      return;
    }
    this.logInfo(info);
  }

  /**
   * Print Web Vitals results to console
   * @param {Array} results - Array of Web Vitals results
   */
  public printWebVitals(results: any[]) {
    if (this.level > 2) {
      return;
    }
    console.log(
      '\n' + _colors.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    );
    console.log(_colors.cyan('📊 CORE WEB VITALS'));
    console.log(
      _colors.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    );

    for (const result of results) {
      console.log(_colors.white(`\n🔗 ${result.url}`));

      const getRatingColor = (rating: string) => {
        if (rating === 'good') return _colors.green;
        if (rating === 'needs-improvement') return _colors.yellow;
        return _colors.red;
      };

      const getRatingEmoji = (rating: string) => {
        if (rating === 'good') return '🟢';
        if (rating === 'needs-improvement') return '🟡';
        return '🔴';
      };

      const { metrics } = result;
      console.log(
        `   LCP: ${metrics.lcp.value.toFixed(0)}ms ${getRatingEmoji(metrics.lcp.rating)} ${getRatingColor(metrics.lcp.rating)(metrics.lcp.rating)}`
      );
      console.log(
        `   FCP: ${metrics.fcp.value.toFixed(0)}ms ${getRatingEmoji(metrics.fcp.rating)} ${getRatingColor(metrics.fcp.rating)(metrics.fcp.rating)}`
      );
      console.log(
        `   CLS: ${metrics.cls.value.toFixed(3)} ${getRatingEmoji(metrics.cls.rating)} ${getRatingColor(metrics.cls.rating)(metrics.cls.rating)}`
      );
      console.log(
        `   TTFB: ${metrics.ttfb.value.toFixed(0)}ms ${getRatingEmoji(metrics.ttfb.rating)} ${getRatingColor(metrics.ttfb.rating)(metrics.ttfb.rating)}`
      );
      console.log(
        `   Resources: ${result.resourceCount} | Transfer: ${(result.transferSize / 1024).toFixed(1)} KB`
      );
    }
    console.log(
      '\n' + _colors.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    );
  }

  /**
   * Print beautiful message to console
   * @param {String} - Result message
   * @returns {String} - Print CFonts message to console
   */
  public printTextToConsole(text: string) {
    if (this.level > 2) {
      return;
    }
    const formattedText = text.replace(' ', '|');
    CFonts.say(formattedText, {
      font: 'block', // define the font face
      align: 'left', // define text alignment
      colors: ['system'], // define all colors
      background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
      letterSpacing: 1, // define letter spacing
      lineHeight: 1, // define the line height
      space: true, // define if the output text should have empty lines on top and on the bottom
      maxLength: '0', // define how many character can be on one line
      gradient: false, // define your two gradient colors
      independentGradient: false, // define if you want to recalculate the gradient for each new line
      transitionGradient: false, // define if this is a transition between colors directly
      env: 'node' // define the environment CFonts is being executed in
    });
  }
}

export default Logger;
