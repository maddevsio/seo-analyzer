function canonicalLinkRule(dom) {
  return new Promise(async (resolve, reject) => {
    let report = '';
    const element = dom.window.document.querySelector(
      'head > link[rel="canonical"]'
    );
    if (!element) {
      report = 'This HTML without <link rel="canonical" href="..."> link';
    } else if (element && !element.href) {
      report = 'The canonical link without href attribute';
    } else if (element && !element.href.length) {
      report =
        'The canonical link for the <link rel="canonical" href=""> tag is empty';
    } else if (element && element.href.substr(-1) !== '/') {
      report =
        'The href attribute does not have a slash at the end of the link.';
    }
    resolve(report);
  });
}

export default canonicalLinkRule;
