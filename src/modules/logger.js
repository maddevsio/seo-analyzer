import CFonts from 'cfonts';
import _colors from 'colors';

class Analyzer {
  /**
   * Print formatted result to console
   * @param {Array} - Array of reports
   * @returns {Error} - Stop execution and print error
   */
  result(result) {
    this._logResult(result);
  }

  /**
   * Print error message to console
   * @param {String} - Message
   * @returns {String} - Print formatted message to console
   */
  error(error, exit) {
    this._logError(error);
    if (exit) process.exit(1);
  }

  /**
   * Print success message to console
   * @param {String} - Message
   * @returns {String} - Print formatted message to console
   */
  success(success) {
    this._logSuccess(success);
  }

  /**
   * Print info message to console
   * @param {String} - Message
   * @returns {String} - Print formatted message to console
   */
  info(info) {
    this._logInfo(info);
  }

  /**
   * Print beautiful message to console
   * @param {String} - Result message
   * @returns {String} - Print CFonts message to console
   */
  printTextToConsole(text) {
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
   * @memberof Analyzer
   * @description Print result message to console
   */
  _logResult(result) {
    if (!result.some(r => r.report.length))
      return this._logSuccess('👍 SEO defects were not detected.\n');

    this._logInfo('\n🚀  Report of errors');

    for (const item of result) {
      this._logInfo(`\nFile: ${item.source.trim()}`);
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
   * @memberof Analyzer
   * @description Print error message to console
   */
  _logError(error) {
    console.error(`${_colors.red(error)}`);
  }

  /**
   * @param {String} - Error object
   * @returns {String} - Stop execution and print error
   * @private
   * @memberof Analyzer
   * @description Print error message to console
   */
  _logInfo(info) {
    console.log(`${_colors.yellow(info)}`);
  }

  /**
   * @param {String} - Message
   * @returns {String} - Print formatted message to console
   * @private
   * @memberof Analyzer
   */
  _logSuccess(success) {
    console.log(`${_colors.green(success)}`);
  }
}

export default Analyzer;
