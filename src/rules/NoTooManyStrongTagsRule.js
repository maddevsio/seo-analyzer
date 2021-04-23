'use strict'

import BaseRule from './BaseRule'

class NoTooManyStrongTagsRule extends BaseRule {
  check (dom) {
    if (this.options.enabled === 0) {
      return
    }
    let report = ''
    const elements = dom.window.document.querySelectorAll('strong')
    if (elements && elements.length > this.options.threshold) {
      report += 'This HTML have more than ' + this.options.threshold + ' <strong> tags'
    }
    return report
  }
}

export default NoTooManyStrongTagsRule
