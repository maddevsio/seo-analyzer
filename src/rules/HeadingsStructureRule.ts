import { JSDOM } from 'jsdom';

function headingsStructureRule(dom: JSDOM): Promise<string[] | []> {
  return new Promise(resolve => {
    const headings = dom.window.document.querySelectorAll(
      'h1, h2, h3, h4, h5, h6'
    );
    const report: string[] = [];
    let previousLevel = 0;
    if (headings.length) {
      headings.forEach((heading: Element) => {
        const level = parseInt(heading.tagName.substring(1), 10);
        if (level < previousLevel) {
          report.push(
            `Incorrect headings structure: ${heading.tagName} follows ${
              previousLevel ? 'H' + previousLevel : 'no heading'
            }.`
          );
        }
        previousLevel = level;
      });
    }

    resolve(report);
  });
}

export default headingsStructureRule;
