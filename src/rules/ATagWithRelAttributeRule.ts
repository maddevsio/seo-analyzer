import { JSDOM } from 'jsdom';

function ATagWithRelAttributeRule(dom: JSDOM): Promise<string[] | []> {
  return new Promise(resolve => {
    let count = 0;
    const report: string[] = [];
    const elements = dom.window.document.querySelectorAll('a');
    elements.forEach((element: HTMLAnchorElement) => {
      if (!element.rel) {
        count++;
      }
    });
    if (count > 0) {
      report.push(`There are ${count} <a> tags without a rel attribute`);
    }
    resolve(report);
  });
}

export default ATagWithRelAttributeRule;
