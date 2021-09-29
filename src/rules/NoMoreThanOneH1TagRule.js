function noMoreThanOneH1TagRule(dom) {
  return new Promise(resolve => {
    const elements = dom.window.document.querySelectorAll('h1');
    if (elements && elements.length > 1) {
      resolve('This HTML have more than one <h1> tag');
    }
    resolve(null);
  });
}

export default noMoreThanOneH1TagRule;
