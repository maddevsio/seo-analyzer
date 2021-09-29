import test from 'ava';
import titleLengthRule from '../../src/rules/TitleLengthRule';

const fakeDOM = (title = null) => ({
  window: {
    document: {
      querySelector: () => title 
    }
  }
});

test('if title not exists, return promise "This HTML without <title> tag"', async t => {
  const withoutTitle = fakeDOM();
  const options = { min: 1, max: 10 };
  const result = await titleLengthRule(withoutTitle, options);
  t.is(result, 'This HTML without <title> tag');
});

test('if title length is less than min, return promise "<title> too short(2). The minimum length should be 5 characters."', async t => {
  const withTitle = fakeDOM('Hi');
  const options = { min: 5, max: 10 };
  const result = await titleLengthRule(withTitle, options);
  t.is(result, '<title> too short(2). The minimum length should be 5 characters.');
});

test('if title length is more than max, return promise "<title> too long(12). The maximum length should be 10 characters."', async t => {
  const withTitle = fakeDOM('Hi, I am a title');
  const options = { min: 5, max: 10 };
  const result = await titleLengthRule(withTitle, options);
  t.is(result, '<title> too long(16). The maximum length should be 10 characters.');
});

test('if title length is between min and max, return promise "null"', async t => {
  const withTitle = fakeDOM('Title');
  const options = { min: 5, max: 10 };
  const result = await titleLengthRule(withTitle, options);
  t.is(result, null);
});
