'use strict'

import BaseRule from './BaseRule'

class ImgTagWithAltAttritubeRule extends BaseRule {
  check (dom) {
    if (this.options.enabled === 0) {
      return
    }
    let report = ''
    let count = 0
    const elements = dom.window.document.querySelectorAll('img')
    elements.forEach((element) => {
      if (!element.alt) {
        count++
      }
    })
    if (count > 0) {
      report += 'There are ' + count + ' <img> tag without alt attribute'
    }
    return report
  }
}

export default ImgTagWithAltAttritubeRule
