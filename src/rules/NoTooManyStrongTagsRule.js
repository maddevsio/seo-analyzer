function noTooManyStrongTagsRule(dom, options) {
  return new Promise(resolve => {
    let report = '';
    const elements = dom.window.document.querySelectorAll('strong');
    if (elements && elements.length > options.threshold) {
      report +=
        'This HTML have more than ' + options.threshold + ' <strong> tags';
    }
    resolve(report);
  });
}

export default noTooManyStrongTagsRule;
