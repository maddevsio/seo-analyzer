function titleLengthRule(dom, options) {
  return new Promise(resolve => {
    const document = dom.window.document;
    if (!Object.prototype.hasOwnProperty.call(document, 'title')) {
      resolve('This HTML without <title> tag');
    }
    // If title exists in the DOM
    const titleLength = document.title.length;
    if (titleLength < options.min) {
      resolve(`<title> too short(${titleLength}). The minimum length should be ${options.min} characters.`);
    }
    if (titleLength > options.max) {
      resolve(`<title> too long(${titleLength}). The maximum length should be ${options.max} characters.`);
    }
    resolve(null);
  });
}

export default titleLengthRule;
