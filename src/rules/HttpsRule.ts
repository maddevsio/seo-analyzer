import { JSDOM } from 'jsdom';

/**
 * Checks for HTTPS usage and mixed content in the provided DOM.
 * @param {import('jsdom').JSDOM} dom The JSDOM object representing the HTML document.
 * @returns {Promise<string[]>} A promise that resolves with an array of error messages for HTTPS issues.
 */
function httpsRule(dom: JSDOM): Promise<string[] | []> {
  return new Promise(resolve => {
    const report: string[] = [];
    const document = dom.window.document;

    // Check canonical link for HTTPS
    const canonicalLink: HTMLLinkElement | null = document.querySelector(
      'head > link[rel="canonical"]'
    );
    if (canonicalLink && canonicalLink.href) {
      if (!canonicalLink.href.startsWith('https://')) {
        report.push('The canonical link does not use HTTPS protocol');
      }
    }

    // Check og:url for HTTPS
    const ogUrl: HTMLMetaElement | null = document.querySelector(
      'head > meta[property="og:url"]'
    );
    if (ogUrl && ogUrl.content) {
      if (!ogUrl.content.startsWith('https://')) {
        report.push('The og:url meta tag does not use HTTPS protocol');
      }
    }

    // Check for mixed content - images with http://
    const httpImages = document.querySelectorAll('img[src^="http://"]');
    if (httpImages.length > 0) {
      report.push(
        `Found ${httpImages.length} image(s) loaded over insecure HTTP protocol (mixed content)`
      );
    }

    // Check for mixed content - scripts with http://
    const httpScripts = document.querySelectorAll('script[src^="http://"]');
    if (httpScripts.length > 0) {
      report.push(
        `Found ${httpScripts.length} script(s) loaded over insecure HTTP protocol (mixed content)`
      );
    }

    // Check for mixed content - links with http://
    const httpLinks = document.querySelectorAll('link[href^="http://"]');
    if (httpLinks.length > 0) {
      report.push(
        `Found ${httpLinks.length} link(s) with insecure HTTP protocol (mixed content)`
      );
    }

    resolve(report);
  });
}

export default httpsRule;
