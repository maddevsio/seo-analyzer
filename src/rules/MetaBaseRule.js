import { META_BASE_RULE } from './config/defaults';

function metaBaseRule(dom, options = { list: [] }) {
  return new Promise(resolve => {
    const report = [];
    const list = options?.names || META_BASE_RULE.names;
    list.forEach(name => {
      const element = dom.window.document.querySelector(
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
