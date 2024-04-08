import { JSDOM } from 'jsdom';

/**
 * Checks the presence and validity of the canonical link in the provided DOM.
 * @param {import('jsdom').JSDOM} dom The JSDOM object representing the HTML document.
 * @returns {Promise<string|null>} A promise that resolves with a string indicating an error message if
 * the canonical link is missing or invalid, otherwise resolves with null.
 */
function canonicalLinkRule(dom: JSDOM): Promise<string[] | []> {
  return new Promise(resolve => {
    const element: HTMLAnchorElement | null = dom.window.document.querySelector(
      'head > link[rel="canonical"]'
    );
    const report: string[] = [];
    if (!element) {
      report.push(
        'This HTML is missing a <link rel="canonical" href="..."> link'
      );
    } else {
      if (element && !element?.href) {
        report.push('The canonical link is missing an href attribute');
      } else if (element && element?.href?.substr(-1) !== '/') {
        report.push(
          'The href attribute does not have a slash at the end of the link.'
        );
      }
    }
    resolve(report);
  });
}

export default canonicalLinkRule;
