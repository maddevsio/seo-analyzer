'use strict'

import BaseRule from './BaseRule'

class ATagWithRelAttritubeRule extends BaseRule {
  check (dom) {
    if (this.options.enabled === 0) {
      return
    }
    let report = ''
    let count = 0
    const elements = dom.window.document.querySelectorAll('a')
    elements.forEach((element) => {
      if (!element.rel) {
        count++
      }
    })
    if (count > 0) {
      report += 'There are ' + count + ' <a> tag without rel attribute'
    }
    return report
  }
}

export default ATagWithRelAttritubeRule
