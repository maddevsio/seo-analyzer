function metaSocialRule(dom, options = { properties: [] }) {
  return new Promise(resolve => {
    const report = [];
    if (options && options.properties && options.properties.length) {
      options.properties.forEach(property => {
        const element = dom.window.document.querySelector(
          `head > meta[property="${property}"]`
        );
        if (!element) {
          report.push(
            `This HTML is missing a <meta property="${property}"> tag`
          );
        } else if (!element.content) {
          report.push(
            `The content attribute for the <meta property="${property}" content=""> tag is empty`
          );
        }
      });
    }
    resolve(report);
  });
}

export default metaSocialRule;
