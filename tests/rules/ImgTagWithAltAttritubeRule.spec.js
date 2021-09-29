import test from 'ava';
import imgTagWithAltAttritubeRule from '../../src/rules/ImgTagWithAltAttritubeRule';

const fakeDOM = (images = []) => ({
  window: {
    document: {
      querySelectorAll: () => images
    }
  }
});

test('if img tag without alt attribute, return "There are 2 <img> tag without alt attribute"', async t => {
  const images = [
    { tagName: 'img' },
    { tagName: 'img' }
  ];
  const result = await imgTagWithAltAttritubeRule(fakeDOM(images));
  t.is(result, 'There are 2 <img> tag without alt attribute');
});

test('if img tags exists alt attribute, return "null"', async t => {
  const images = [
    { tagName: 'img', alt: 'Image' },
    { tagName: 'img', alt: 'Image2' }
  ];
  const result = await imgTagWithAltAttritubeRule(fakeDOM(images));
  t.is(result, null);
});
