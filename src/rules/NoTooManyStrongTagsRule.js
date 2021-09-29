function noTooManyStrongTagsRule(dom, options) {
  return new Promise(resolve => {
    const elements = dom.window.document.querySelectorAll('strong');
    if (elements && elements.length > options.threshold) {
      resolve(`This HTML have more than ${options.threshold} <strong> tags`);
    }
    resolve(null);
  });
}

export default noTooManyStrongTagsRule;
