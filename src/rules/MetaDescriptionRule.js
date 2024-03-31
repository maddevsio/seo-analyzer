import { META_DESCRIPTION_LENGTH_RULE } from './config/defaults';

function metaDescriptionRule(dom, options) {
  return new Promise(resolve => {
    const description = dom.window.document.querySelector(
      "meta[name='description']"
    );
    if (!description) {
      resolve('Meta description tag is missing.');
    }
    const descriptionTags =
      dom.window.document.querySelectorAll("meta[name='description']") || 0;
    const descriptionLength = description.getAttribute('content').length || 0;
    const min = options?.min || META_DESCRIPTION_LENGTH_RULE.min;
    const max = options?.max || META_DESCRIPTION_LENGTH_RULE.max;
    if (descriptionTags.length > 1) {
      resolve('More than one meta description tag found.');
    }
    if (descriptionLength < min || descriptionLength > max) {
      resolve(
        `The meta description length(${descriptionLength}) should be between ${min} and ${max} characters.`
      );
    }
    resolve(null);
  });
}

export default metaDescriptionRule;
