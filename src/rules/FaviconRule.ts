import { JSDOM } from 'jsdom';

/**
 * Checks the presence of a favicon in the provided DOM.
 * @param {import('jsdom').JSDOM} dom The JSDOM object representing the HTML document.
 * @returns {Promise<string[]|[]>} A promise that resolves with a string array containing error messages if
 * no favicon is found, otherwise resolves with an empty array.
 */
function faviconRule(dom: JSDOM): Promise<string[] | []> {
  return new Promise(resolve => {
    const report: string[] = [];

    // Check for both standard and legacy favicon link tags
    const iconElement: HTMLLinkElement | null =
      dom.window.document.querySelector('link[rel="icon"]');
    const shortcutIconElement: HTMLLinkElement | null =
      dom.window.document.querySelector('link[rel="shortcut icon"]');

    if (!iconElement && !shortcutIconElement) {
      report.push(
        'This HTML is missing a favicon. Add a <link rel="icon" href="..."> tag to the <head>'
      );
    }

    resolve(report);
  });
}

export default faviconRule;
