import test from 'ava';
import noMoreThanOneH1TagRule from '../../src/rules/NoMoreThanOneH1TagRule';

const fakeDOM = (strongs = []) => ({
  window: {
    document: {
      querySelectorAll: () => strongs
    }
  }
});

test('If document has more one h1 tags, return "This HTML have more than one <h1> tag"', async t => {
  const strongs = Array.from({ length: 3 }, () => ({ tagName: 'h1' }));
  const result = await noMoreThanOneH1TagRule(fakeDOM(strongs));
  t.is(result, 'This HTML have more than one <h1> tag');
});

test('If document has h1 tag, return null', async t => {
  const strongs = Array.from({ length: 1 }, () => ({ tagName: 'h1' }));
  const result = await noMoreThanOneH1TagRule(fakeDOM(strongs));
  t.is(result, null);
});