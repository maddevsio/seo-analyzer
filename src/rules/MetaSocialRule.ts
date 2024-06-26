import { JSDOM } from 'jsdom';
import { META_SOCIAL_RULE } from './config/defaults';

function metaSocialRule(
  dom: JSDOM,
  options?: { properties: string[] }
): Promise<string[] | []> {
  return new Promise(resolve => {
    const report: string[] = [];
    const list = options?.properties || META_SOCIAL_RULE.properties;
    list.forEach(property => {
      const element: HTMLMetaElement | null = dom.window.document.querySelector(
        `head > meta[property="${property}"]`
      );
      if (!element) {
        report.push(`This HTML is missing a <meta property="${property}"> tag`);
      } else if (!element.content) {
        report.push(
          `The content attribute for the <meta property="${property}" content=""> tag is empty`
        );
      }
    });
    resolve(report);
  });
}

export default metaSocialRule;
