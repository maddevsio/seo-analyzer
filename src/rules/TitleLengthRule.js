import { TITLE_LENGTH_RULE } from './config/defaults';

function titleLengthRule(dom, options) {
  return new Promise(resolve => {
    const title = dom?.window?.document?.title;
    if (!title) {
      resolve('This HTML is missing a <title> tag');
    }
    // If title exists in the DOM
    const titleLength = title.length || 0;
    const min = options?.min || TITLE_LENGTH_RULE.min;
    const max = options?.max || TITLE_LENGTH_RULE.max;
    if (titleLength < min) {
      resolve(
        `<title> too short(${titleLength}). The minimum length should be ${min} characters.`
      );
    }
    if (titleLength > max) {
      resolve(
        `<title> too long(${titleLength}). The maximum length should be ${max} characters.`
      );
    }
    resolve(null);
  });
}

export default titleLengthRule;
