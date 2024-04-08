import { JSDOM } from 'jsdom';
import titleLengthRule from '../../src/rules/TitleLengthRule';

const fakeDOM = (title: string = ''): JSDOM => ({
  window: {
    // @ts-ignore
    document: {
      title
    }
  }
});

test('if title not exists, return promise "This HTML without <title> tag"', async () => {
  const withoutTitle = fakeDOM();
  const result = await titleLengthRule(withoutTitle);
  expect(result).toStrictEqual(['This HTML is missing a <title> tag']);
});

test('if title length is less than min, return promise "<title> too short(2). The minimum length should be 5 characters."', async () => {
  const withTitle = fakeDOM('Hi');
  const options = { min: 5, max: 10 };
  const result = await titleLengthRule(withTitle, options);
  expect(result).toStrictEqual([
    '<title> too short(2). The minimum length should be 5 characters.'
  ]);
});

test('if title length is more than max, return promise "<title> too long(12). The maximum length should be 10 characters."', async () => {
  const withTitle = fakeDOM('Hi, I am a title');
  const options = { min: 5, max: 10 };
  const result = await titleLengthRule(withTitle, options);
  expect(result).toStrictEqual([
    '<title> too long(16). The maximum length should be 10 characters.'
  ]);
});

test('if title length is between min and max, return promise "null"', async () => {
  const withTitle = fakeDOM('Title');
  const options = { min: 5, max: 10 };
  const result = await titleLengthRule(withTitle, options);
  expect(result.length).toBe(0);
});
