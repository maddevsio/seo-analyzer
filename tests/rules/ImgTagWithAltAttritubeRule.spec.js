import test from 'ava';
import imgTagWithAltAttributeRule from '../../src/rules/ImgTagWithAltAttributeRule';

const fakeDOM = (images = []) => ({
  window: {
    document: {
      querySelectorAll: () => images
    }
  }
});

test('if img tag without alt attribute, return "There are 2 <img> tag without alt attribute"', async t => {
  const images = [
    { tagName: 'img', src: '/' },
    { tagName: 'img', src: '/' }
  ];
  const result = await imgTagWithAltAttributeRule(fakeDOM(images));
  t.deepEqual(result, ['There are 2 <img> tags without an alt attribute']);
});

test('if img tag without src and alt attribute', async t => {
  const images = [
    { tagName: 'img' }
  ];
  const report = [
    'There are 1 <img> tags without a src attribute',
    'There are 1 <img> tags without an alt attribute'
  ];
  const result = await imgTagWithAltAttributeRule(fakeDOM(images));
  t.deepEqual(result, report);
});

test('if img tags exists alt attribute, return "null"', async t => {
  const images = [
    { tagName: 'img', alt: 'Image', src: '/' },
    { tagName: 'img', alt: 'Image2', src: '/' }
  ];
  const result = await imgTagWithAltAttributeRule(fakeDOM(images));
  t.is(result, null);
});
