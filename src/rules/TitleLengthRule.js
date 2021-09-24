function titleLengthRule(dom, options) {
  return new Promise(resolve => {
    const titleLength = dom.window.document.title.length;
    let report = '';
    if (!dom.window.document.title) {
      report += 'This HTML without <title> tag';
    }
    if (titleLength < options.min) {
      report += `<title> too short(${titleLength}). The minimum length should be ${options.min} characters.`;
    }
    if (titleLength > options.max) {
      report += `<title> too long(${titleLength}). The maximum length should be ${options.max} characters.`;
    }
    resolve(report);
  });
}

export default titleLengthRule;
