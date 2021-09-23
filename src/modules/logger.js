class Analyzer {
  constructor() {
    this.red = '\x1b[31m';
    this.green = '\x1b[32m';
    this.yellow = '\x1b[33m%s\x1b[0m';
    this.successMessage = 'SEO defects were not detected.\n';
  }

  result(result) {
    this._logResult(result);
  }

  error(error) {
    this._logError(error);
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
