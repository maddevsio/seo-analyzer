function headTagWithTitleAndDescriptionKeywordsMetaRule(dom) {
  return new Promise(async (resolve, reject) => {
    let report = []
    const metaList = ['description', 'keywords']
    metaList.forEach((meta) => {
      let element = dom.window.document.querySelector('head > meta[name=' + meta + ']')
      if (!element || (element && !element.getAttribute('content'))) {
        report.push('This HTML without <meta name="' + meta + '"> tag')
      }
    })
    resolve(report.join('\n'));
  });
};

export default headTagWithTitleAndDescriptionKeywordsMetaRule;
