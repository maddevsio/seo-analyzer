import { JSDOM } from 'jsdom';

/**
 * Checks the presence and validity of JSON-LD structured data in the provided DOM.
 * @param {import('jsdom').JSDOM} dom The JSDOM object representing the HTML document.
 * @returns {Promise<string[]|[]>} A promise that resolves with an array of error messages if
 * JSON-LD is missing or invalid, otherwise resolves with an empty array.
 */
function jsonLdRule(dom: JSDOM): Promise<string[] | []> {
  return new Promise(resolve => {
    const scripts: NodeListOf<HTMLScriptElement> =
      dom.window.document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
    const report: string[] = [];

    if (!scripts || scripts.length === 0) {
      report.push(
        'This HTML is missing JSON-LD structured data. Add a <script type="application/ld+json"> tag.'
      );
      resolve(report);
      return;
    }

    // Validate that each JSON-LD script contains parseable JSON
    scripts.forEach((script, index) => {
      const content = script.textContent?.trim();

      if (!content) {
        report.push(
          `JSON-LD script ${index + 1} is empty. It should contain valid JSON structured data.`
        );
        return;
      }

      try {
        JSON.parse(content);
      } catch (error) {
        report.push(
          `JSON-LD script ${index + 1} contains invalid JSON: ${error instanceof Error ? error.message : 'Unknown error'}`
        );
      }
    });

    resolve(report);
  });
}

export default jsonLdRule;
