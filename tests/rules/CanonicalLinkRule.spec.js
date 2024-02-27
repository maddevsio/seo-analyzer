import test from 'ava';
import canonicalLinkRule from '../../src/rules/CanonicalLinkRule';

const fakeDOM = (canonical = null) => ({
  window: {
    document: {
      querySelector: () => canonical 
    }
  }
});

test('if document not exists a canonical link, it should return "This HTML without <link rel="canonical" href="..."> link"', async t => {
  const result = await canonicalLinkRule(fakeDOM());
  t.is(result, 'This HTML is missing a <link rel="canonical" href="..."> link');
});

test('if canonical link without href, it should return "The canonical link without href attribute"', async t => {
  const result = await canonicalLinkRule(fakeDOM({}));
  t.is(result, 'The canonical link is missing an href attribute');
});

test('if canonical link with empty href, it should return "The canonical link without href attribute"', async t => {
  const result = await canonicalLinkRule(fakeDOM({ href: ''}));
  t.is(result, 'The canonical link is missing an href attribute');
});

test('if canonical link without slash, it should return "The href attribute does not have a slash at the end of the link."', async t => {
  const result = await canonicalLinkRule(fakeDOM({  href: 'http://www.example.com' }));
  t.is(result, 'The href attribute does not have a slash at the end of the link.');
});
