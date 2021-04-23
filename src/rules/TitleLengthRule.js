'use strict'

import BaseRule from './BaseRule'

class TitleLengthRule extends BaseRule {
  check (dom) {
    if (this.options.enabled === 0) {
      return
    }
    let report = ''
    if (!dom.window.document.title) {
      return report += 'This HTML without <title> tag'
    }
    const titleLength = dom.window.document.title.length
    if (titleLength < this.options.min) {
      report += `<title> too short(<${titleLength}). The minimum length should be ${this.options.min} characters.`
    }
    if (titleLength > this.options.max) {
      report += `<title> too long(>${titleLength}). The maximum length should be ${this.options.max} characters.`
    }
    return report
  }
}

export default TitleLengthRule
