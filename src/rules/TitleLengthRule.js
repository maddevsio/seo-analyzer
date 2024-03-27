function titleLengthRule(dom, options) {
  return new Promise(resolve => {
    const document = dom.window.document;
    const title = document.querySelector('title');
    if (!title) {
      resolve('This HTML is missing a <title> tag');
    }
    // If title exists in the DOM
    const titleLength = title.length;
    if (titleLength < options.min) {
      resolve(
        `<title> too short(${titleLength}). The minimum length should be ${options.min} characters.`
      );
    }
    if (titleLength > options.max) {
      resolve(
        `<title> too long(${titleLength}). The maximum length should be ${options.max} characters.`
      );
    }
    resolve(null);
  });
}

export default titleLengthRule;
