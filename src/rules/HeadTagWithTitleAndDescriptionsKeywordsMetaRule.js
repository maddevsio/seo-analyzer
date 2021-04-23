'use strict'

import BaseRule from './BaseRule'

class HeadTagWithTitleAndDescriptionsKeywordsMetaRule extends BaseRule {
  check (dom) {
    if (this.options.enabled === 0) {
      return
    }
    let report = []
    if (!dom.window.document.title) {
      report.push('This HTML without <title> tag')
    }
    const metaList = ['descriptions', 'keywords']
    metaList.forEach((meta) => {
      let element = dom.window.document.querySelector('head > meta[name=' + meta + ']')
      if (!element || (element && !element.getAttribute('content'))) {
        report.push('This HTML without <meta name="' + meta + '"> tag')
      }
    })
    return report.join('\n')
  }
}

export default HeadTagWithTitleAndDescriptionsKeywordsMetaRule
