import { JSDOM } from 'jsdom';
import ATagWithRelAttributeRule from '../../src/rules/ATagWithRelAttributeRule';

const fakeDOM = (links = []) => ({
  window: {
    document: {
      querySelectorAll: () => links
    }
  }
});

test('if a tag without rel attribute, return "There are 2 <a> tag without rel attribute"', async () => {
  const links = [{ tagName: 'a' }, { tagName: 'a' }];
  const result = await ATagWithRelAttributeRule(fakeDOM(links));
  expect(result).toEqual(
    expect.arrayContaining(['There are 2 <a> tags without a rel attribute'])
  );
});

test('if a tags exists rel attribute, return []', async () => {
  const links = [
    { tagName: 'a', rel: 'Rel' },
    { tagName: 'a', rel: 'Rel' }
  ];
  const result = await ATagWithRelAttributeRule(fakeDOM(links));
  expect(result.length).toBe(0);
});
