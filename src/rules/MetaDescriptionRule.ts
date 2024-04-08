import { JSDOM } from 'jsdom';
import { META_DESCRIPTION_LENGTH_RULE } from './config/defaults';

function metaDescriptionRule(
  dom: JSDOM,
  options: { min: number; max: number }
): Promise<string[] | []> {
  return new Promise(resolve => {
    const description = dom.window.document.querySelector(
      "meta[name='description']"
    );
    const report: string[] = [];
    if (!description) {
      report.push('Meta description tag is missing.');
    }
    const descriptionTags: NodeListOf<Element> =
      dom.window.document.querySelectorAll("meta[name='description']") || 0;
    const descriptionLength = description?.getAttribute('content')?.length || 0;
    const min = options?.min || META_DESCRIPTION_LENGTH_RULE.min;
    const max = options?.max || META_DESCRIPTION_LENGTH_RULE.max;
    if (descriptionTags.length > 1) {
      report.push('More than one meta description tag found.');
    }
    if (descriptionLength < min || descriptionLength > max) {
      report.push(
        `The meta description length(${descriptionLength}) should be between ${min} and ${max} characters.`
      );
    }
    resolve(report);
  });
}

export default metaDescriptionRule;
