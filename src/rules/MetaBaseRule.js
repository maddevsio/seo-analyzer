function metaBaseRule(dom, options = { list: [] }) {
  return new Promise(async (resolve, reject) => {
    const report = []
    if (options && options.list && options.list.length) {
      options.list.forEach(name => {
        const element = dom.window.document.querySelector(`head > meta[name="${name}"]`)
        if (element && !element.content.length) {
          report.push(`The content attribute for the <meta name="${name}" content=""> tag is empty`)
        }
        if (!element || (element && !element.content)) {
          report.push(`This HTML without <meta name="${name}"> tag`)
        }
      })
    }
    resolve(report);
  });
};

export default metaBaseRule;
