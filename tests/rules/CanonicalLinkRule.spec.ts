import { JSDOM } from 'jsdom';
import canonicalLinkRule from '../../src/rules/CanonicalLinkRule';

const fakeDOM = (canonical?: any): JSDOM => ({
  window: {
    // @ts-ignore
    document: {
      querySelector: () => canonical
    }
  }
});

test('if document not exists a canonical link, it should return "This HTML without <link rel="canonical" href="..."> link"', async () => {
  const result = await canonicalLinkRule(fakeDOM());
  expect(result).toStrictEqual([
    'This HTML is missing a <link rel="canonical" href="..."> link'
  ]);
});

test('if canonical link without href, it should return "The canonical link without href attribute"', async () => {
  const result = await canonicalLinkRule(fakeDOM({}));
  expect(result).toStrictEqual([
    'The canonical link is missing an href attribute'
  ]);
});

test('if canonical link with empty href, it should return "The canonical link without href attribute"', async () => {
  const result = await canonicalLinkRule(fakeDOM({ href: '' }));
  expect(result).toStrictEqual([
    'The canonical link is missing an href attribute'
  ]);
});

test('if canonical link without slash, it should return "The href attribute does not have a slash at the end of the link."', async () => {
  const result = await canonicalLinkRule(
    fakeDOM({ href: 'http://www.example.com' })
  );
  expect(result).toStrictEqual([
    'The href attribute does not have a slash at the end of the link.'
  ]);
});
