import { JSDOM } from 'jsdom';
import { TITLE_LENGTH_RULE } from './config/defaults';

function titleLengthRule(
  dom: JSDOM,
  options?: { min: number; max: number }
): Promise<string[] | []> {
  return new Promise(resolve => {
    const title = dom?.window?.document?.title;
    const report: string[] = [];
    if (!title) {
      report.push('This HTML is missing a <title> tag');
    } else {
      const titleLength = title.length || 0;
      const min = options?.min || TITLE_LENGTH_RULE.min;
      const max = options?.max || TITLE_LENGTH_RULE.max;
      if (titleLength < min) {
        report.push(
          `<title> too short(${titleLength}). The minimum length should be ${min} characters.`
        );
      }
      if (titleLength > max) {
        report.push(
          `<title> too long(${titleLength}). The maximum length should be ${max} characters.`
        );
      }
    }
    resolve(report);
  });
}

export default titleLengthRule;
