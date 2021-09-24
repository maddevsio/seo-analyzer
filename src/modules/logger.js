import CFonts from 'cfonts';

class Analyzer {
  constructor() {
    this.red = '\x1b[31m';
    this.green = '\x1b[32m';
    this.yellow = '\x1b[33m%s\x1b[0m';
    this.successMessage = 'SEO defects were not detected.\n';
  }

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
  error(error) {
    this._logError(error);
  }

  /**
   * Print beautiful message to console
   * @param {String} - Result message
   * @returns {String} - Print CFonts message to console
   */
  printTextToConsole(text) {
    const formattedText = text.replace(' ', '|');
    CFonts.say(formattedText, {
      font: 'block',              // define the font face
      align: 'left',              // define text alignment
      colors: ['system'],         // define all colors
      background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
      letterSpacing: 1,           // define letter spacing
      lineHeight: 1,              // define the line height
      space: true,                // define if the output text should have empty lines on top and on the bottom
      maxLength: '0',             // define how many character can be on one line
      gradient: false,            // define your two gradient colors
      independentGradient: false, // define if you want to recalculate the gradient for each new line
      transitionGradient: false,  // define if this is a transition between colors directly
      env: 'node'                 // define the environment CFonts is being executed in
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
      return console.log(`\n %s${this.successMessage}`, this.green)

    for (const item of result) {
      console.log(this.yellow, `\nFile: ${item.file.trim()}`)
      console.log(`%s${item.report.join('\n')}`, this.red)
    }

    return process.exit(1); // Stop process in terminal
  }

  /**
   * @param {Error} - Error object
   * @returns {Error} - Stop execution and print error
   * @private
   * @memberof Analyzer
   * @description Print error message to console
   */
  _logError(error) {
    console.error(`\n%s${error}\n`, this.red);
  }
}

export default Analyzer;
