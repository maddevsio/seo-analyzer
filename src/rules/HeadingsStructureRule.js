function headingsStructureRule(dom) {
  return new Promise(resolve => {
    const headings = dom.window.document.querySelectorAll(
      'h1, h2, h3, h4, h5, h6'
    );
    let previousLevel = 0;
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.substring(1), 10);
      if (level < previousLevel) {
        resolve(
          `Incorrect headings structure: ${heading.tagName} follows ${
            previousLevel ? 'H' + previousLevel : 'no heading'
          }.`
        );
      }
      previousLevel = level;
    });

    resolve(null);
  });
}

export default headingsStructureRule;
