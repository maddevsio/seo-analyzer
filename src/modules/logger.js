class Analyzer {
  constructor() {}

  result(result) {
    this._logResult(result);
  }

  /**
   * @param {Array} - Array of reports
   * @returns {Error} - Stop execution and print error 
   */
  _logResult(result) {
    const successMessage = 'SEO defects were not detected.\n'
    const green = '\x1b[32m'
    const red = '\x1b[31m'
    const yellow = '\x1b[33m%s\x1b[0m'

    if (!result.some(r => r.report.length)) return console.log(`\n %s${successMessage}`, green)

    for (const item of result) {
      console.log(yellow, `\nFile: ${item.file.trim()}`)
      console.log(`%s${item.report.join('\n')}\n`, red)
    }

    return process.exit(1) // Stop process in terminal
  }
}

export default Analyzer;
