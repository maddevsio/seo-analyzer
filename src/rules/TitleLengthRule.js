function titleLengthRule(dom) {
  return new Promise(async (resolve, reject) => {
    let report = null
    if (!dom.window.document.title) {
      return report += 'This HTML without <title> tag'
    }
    const titleLength = dom.window.document.title.length
    if (titleLength <= 1) {
      report += `<title> too short(${titleLength}). The minimum length should be 2 characters.`
    }
    if (titleLength > 60) {
      report += `<title> too long(${titleLength}). The maximum length should be 60 characters.`
    }
    resolve(report);
  });
};

export default titleLengthRule;
