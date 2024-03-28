import CFonts from 'cfonts';
import _colors from 'colors';

class Logger {
  /**
   * @param {string} level
   * @returns {Logger}
   */
  constructor(level) {
    const levels = ['trace', 'debug', 'info', 'result', 'success', 'error'];
    this.level = level === 'default' ? 2 : levels.indexOf(level);
  }

  /**
   * Print formatted result to console
   * @param {Array} - Array of reports
   * @returns {Error} - Stop execution and print error
   */
  result(result, force = false) {
    if (this.level > 3 && !force) {
      return;
    }
    this._logResult(result);
  }

  /**
   * Print error message to console
   * @param {String} - Message
   * @returns {String} - Print formatted message to console
   */
  error(error, exit) {
    if (this.level > 5) {
      return;
    }
    this._logError(error);
    if (exit) process.exit(1);
  }

  /**
   * Print success message to console
   * @param {String} - Message
   * @returns {String} - Print formatted message to console
   */
  success(success) {
    if (this.level > 4) {
      return;
    }
    this._logSuccess(success);
  }

  /**
   * Print info message to console
   * @param {String} - Message
   * @returns {String} - Print formatted message to console
   */
  info(info) {
    if (this.level > 2) {
      return;
    }
    this._logInfo(info);
  }

  /**
   * Print beautiful message to console
   * @param {String} - Result message
   * @returns {String} - Print CFonts message to console
   */
  printTextToConsole(text) {
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

  /**
   * @param {Array} - Array of reports
   * @returns {Error} - Stop execution and print error
   * @private
   * @memberof Logger
   * @description Print result message to console
   */
  _logResult(result) {
    if (!result.some(r => r.report.length))
      return this._logSuccess('\n👍  No SEO defects detected.\n');

    this._logInfo('\n🚀  Issue report');

    for (const item of result) {
      this._logInfo(`\nSource: ${item.source.trim()}`);
      this._logError(`${item.report.join('\n')}`);
    }

    this._logSuccess(
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
  _logError(error) {
    console.error(`${_colors.red(error)}`);
  }

  /**
   * @param {String} - Error object
   * @returns {String} - Stop execution and print error
   * @private
   * @memberof Logger
   * @description Print error message to console
   */
  _logInfo(info) {
    console.log(`${_colors.yellow(info)}`);
  }

  /**
   * @param {String} - Message
   * @returns {String} - Print formatted message to console
   * @private
   * @memberof Logger
   */
  _logSuccess(success) {
    console.log(`${_colors.green(success)}`);
  }
}

export default Logger;
