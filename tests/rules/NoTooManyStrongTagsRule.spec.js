import test from 'ava';
import noTooManyStrongTagsRule from '../../src/rules/NoTooManyStrongTagsRule';

const fakeDOM = (strongs = []) => ({
  window: {
    document: {
      querySelectorAll: () => strongs
    }
  }
});

test('If document has more than 3 strong tags, return "This HTML have more than 2 <strong> tags"', async t => {
  const strongs = Array.from({ length: 3 }, () => ({ tagName: 'strong' }));
  const options = { threshold: 2 };
  const result = await noTooManyStrongTagsRule(fakeDOM(strongs), options);
  t.is(result, 'This HTML have more than 2 <strong> tags');
});

test('If document has less than 3 strong tags, return null', async t => {
  const strongs = Array.from({ length: 2 }, () => ({ tagName: 'strong' }));
  const options = { threshold: 2 };
  const result = await noTooManyStrongTagsRule(fakeDOM(strongs), options);
  t.is(result, null);
});
