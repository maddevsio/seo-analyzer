import test from 'ava';
import hTagsRule from '../../src/rules/HTagsRule';

const fakeDOM = (headers = []) => ({
  window: {
    document: {
      querySelectorAll: () => headers
    }
  }
});

test('If the document is not correctly spaced H headings will return "Tag <h3>Title 3</h3> should be </h2>"', async t => {
  const dom = fakeDOM([
    { tagName: 'h1', textContent: 'Title h1' },
    { tagName: 'h3', textContent: 'Title h3' },
    { tagName: 'h2', textContent: 'Title h2' }
  ]);
  const result = await hTagsRule(dom);
  t.is(result, 'Tag <h3>Title h3</h3> should be </h2>');
});

test('If the document is correctly spaced H headings will return ""', async t => {
  const dom = fakeDOM([
    { tagName: 'h1', textContent: 'Title h1' },
    { tagName: 'h2', textContent: 'Title h2' },
    { tagName: 'h3', textContent: 'Title h3' }
  ]);
  const result = await hTagsRule(dom);
  t.is(result, '');
});
