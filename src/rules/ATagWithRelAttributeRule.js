function ATagWithRelAttributeRule(dom) {
  return new Promise(resolve => {
    let count = 0;
    const elements = dom.window.document.querySelectorAll('a');
    elements.forEach(element => {
      if (!element.rel) {
        count++;
      }
    });
    if (count > 0) {
      resolve(`There are ${count} <a> tag without rel attribute`);
    }
    resolve(null);
  });
}

export default ATagWithRelAttributeRule;
