function aTagWithRelAttritubeRule(dom) {
  return new Promise(async (resolve, reject) => {
    let report = '';
    let count = 0;
    const elements = dom.window.document.querySelectorAll('a');
    elements.forEach(element => {
      if (!element.rel) {
        count++;
      }
    });
    if (count > 0) {
      report += 'There are ' + count + ' <a> tag without rel attribute';
    }
    resolve(report);
  });
}

export default aTagWithRelAttritubeRule;
