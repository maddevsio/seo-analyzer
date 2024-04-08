import { JSDOM } from 'jsdom';
import { META_BASE_RULE } from './config/defaults';

function metaBaseRule(
  dom: JSDOM,
  options?: { names: string[] }
): Promise<string[] | []> {
  return new Promise(resolve => {
    const report: string[] = [];
    const list = options?.names || META_BASE_RULE.names;
    list.forEach(name => {
      const element: HTMLMetaElement | null = dom.window.document.querySelector(
        `head > meta[name="${name}"]`
      );
      if (!element) {
        report.push(`This HTML is missing a <meta name="${name}"> tag`);
      } else if (!element.content) {
        report.push(
          `The content attribute for the <meta name="${name}" content=""> tag is empty`
        );
      }
    });
    resolve(report);
  });
}

export default metaBaseRule;
