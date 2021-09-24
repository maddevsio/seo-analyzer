function noMoreThanOneH1TagRule(dom) {
  return new Promise(async (resolve, reject) => {
    let report = '';
    const elements = dom.window.document.querySelectorAll('h1');
    if (elements && elements.length > 1) {
      report += 'This HTML have more than one <h1> tag';
    }
    resolve(report);
  });
}

export default noMoreThanOneH1TagRule;
