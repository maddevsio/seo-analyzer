function titleLengthRule(dom, options) {
  return new Promise(async (resolve, reject) => {
    let report = null
    if (!dom.window.document.title) {
      return report += 'This HTML without <title> tag'
    }
    const titleLength = dom.window.document.title.length
    if (titleLength < options.min) {
      report += `<title> too short(<${titleLength}). The minimum length should be ${options.min} characters.`
    }
    if (titleLength > options.max) {
      report += `<title> too long(>${titleLength}). The maximum length should be ${options.max} characters.`
    }
    resolve(report);
  });
};

export default titleLengthRule;
