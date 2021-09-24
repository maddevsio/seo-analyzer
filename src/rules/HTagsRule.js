function HTagsRule(dom) {
  return new Promise(resolve => {
    let report = '';
    const hTags = dom.window.document.querySelectorAll(
      'h1, h2, h3, h4, h5, h6'
    );

    for (let index = 0; index < hTags.length; index += 1) {
      const currentHTag = hTags[index];
      const nextHTag = hTags[index + 1];
      if (nextHTag) {
        const currentHTagLevel = currentHTag.tagName
          .toLowerCase()
          .replace('h', '');
        const nextHTagLevel = nextHTag.tagName.toLowerCase().replace('h', '');
        if (currentHTagLevel < nextHTagLevel - 1) {
          if (currentHTagLevel !== nextHTagLevel - 1) {
            const message = `Tag <h${nextHTagLevel}>${hTags[
              index + 1
            ].textContent
              .replace(/(\r\n|\n|\r)/gm, '')
              .trim()}</h${nextHTagLevel}> should be </h${
              +currentHTagLevel + 1
            }>`;
            report += message;
          }
        }
      }
    }

    resolve(report);
  });
}

export default HTagsRule;
