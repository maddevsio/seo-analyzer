'use strict'

import BaseRule from './BaseRule'

class NoMoreThanOneH1Tag extends BaseRule {
  check (dom) {
    if (this.options.enabled === 0) {
      return
    }
    let report = ''
    const elements = dom.window.document.querySelectorAll('h1')
    if (elements && elements.length > 1) {
      report += 'This HTML have more than one <h1> tag'
    }
    return report
  }
}

export default NoMoreThanOneH1Tag
