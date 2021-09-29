function imgTagWithAltAttritubeRule(dom) {
  return new Promise(resolve => {
    let count = 0;
    const elements = dom.window.document.querySelectorAll('img');
    elements.forEach(element => {
      if (!element.alt) {
        count++;
      }
    });
    if (count > 0) {
      resolve(`There are ${count} <img> tag without alt attribute`);
    }
    resolve(null);
  });
}

export default imgTagWithAltAttritubeRule;
