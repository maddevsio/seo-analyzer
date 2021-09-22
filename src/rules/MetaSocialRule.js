function metaSocialRule(dom, options = { properties: [] }) {
  return new Promise(async (resolve, reject) => {
    const report = []
    if (options && options.properties && options.properties.length) {
      options.properties.forEach(property => {
        const element = dom.window.document.querySelector(`head > meta[property="${property}"]`)
        if (element && !element.content.length) {
          return report.push(`The content attribute for the <meta property="${property}" content=""> tag is empty`)
        }
        if (!element || (element && !element.content)) {
          return report.push(`This HTML without <meta property="${property}"> tag`)
        }
      })
    }
    resolve(report);
  });
};

export default metaSocialRule;
