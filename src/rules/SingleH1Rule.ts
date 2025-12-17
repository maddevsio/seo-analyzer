import { JSDOM } from 'jsdom';

/**
 * Checks that the HTML document contains exactly one H1 tag.
 * @param {import('jsdom').JSDOM} dom The JSDOM object representing the HTML document.
 * @returns {Promise<string[]>} A promise that resolves with an array of error messages if
 * the H1 count is not exactly one, otherwise resolves with an empty array.
 */
function singleH1Rule(dom: JSDOM): Promise<string[] | []> {
  return new Promise(resolve => {
    const h1Elements = dom.window.document.querySelectorAll('h1');
    const report: string[] = [];
    const h1Count = h1Elements.length;

    if (h1Count === 0) {
      report.push('This HTML is missing an <h1> tag');
    } else if (h1Count > 1) {
      report.push(
        `This HTML has ${h1Count} <h1> tags. There should be exactly one <h1> tag per page.`
      );
    }

    resolve(report);
  });
}

export default singleH1Rule;
