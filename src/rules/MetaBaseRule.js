function metaBaseRule(dom, options = { list: [] }) {
  return new Promise(resolve => {
    const report = [];
    if (options && options.names && options.names.length) {
      options.names.forEach(name => {
        const element = dom.window.document.querySelector(
          `head > meta[name="${name}"]`
        );
        if (!element) {
          report.push(`This HTML is missing a <meta name="${name}"> tag`);
        } else if (!element.content) {
          report.push(
            `The content attribute for the <meta name="${name}" content=""> tag is empty`
          );
        }
      });
    }
    resolve(report);
  });
}

export default metaBaseRule;
