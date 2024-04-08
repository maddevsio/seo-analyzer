import { JSDOM } from 'jsdom';
import metaSocialRule from '../../src/rules/MetaSocialRule';

const fakeDOM = (content?: any): JSDOM => ({
  window: {
    // @ts-ignore
    document: {
      querySelector: () => content
    }
  }
});

test('if document not exists social meta tags, return array with errors', async () => {
  const options = {
    properties: [
      'og:url',
      'og:type',
      'og:site_name',
      'og:title',
      'og:description',
      'og:image',
      'og:image:width',
      'og:image:height',
      'twitter:card',
      'twitter:text:title',
      'twitter:description',
      'twitter:image:src',
      'twitter:url'
    ]
  };
  const result = await metaSocialRule(fakeDOM(), options);
  expect(result[0]).toStrictEqual(
    'This HTML is missing a <meta property="og:url"> tag'
  );
});

test('if document exists social meta tags but property is empty, return array with errors', async () => {
  const options = {
    properties: [
      'og:url',
      'og:type',
      'og:site_name',
      'og:title',
      'og:description',
      'og:image',
      'og:image:width',
      'og:image:height',
      'twitter:card',
      'twitter:text:title',
      'twitter:description',
      'twitter:image:src',
      'twitter:url'
    ]
  };
  const result = await metaSocialRule(fakeDOM({ content: '' }), options);
  expect(result[0]).toStrictEqual(
    'The content attribute for the <meta property="og:url" content=""> tag is empty'
  );
});

test('if document exists social meta tags description & viewport, return []', async () => {
  const options = {
    properties: [
      'og:url',
      'og:type',
      'og:site_name',
      'og:title',
      'og:description',
      'og:image',
      'og:image:width',
      'og:image:height',
      'twitter:card',
      'twitter:text:title',
      'twitter:description',
      'twitter:image:src',
      'twitter:url'
    ]
  };
  const result = await metaSocialRule(fakeDOM({ content: 'content' }), options);
  expect(result.length).toBe(0);
});

test('if option names is empty, return []', async () => {
  const options = { properties: [] };
  const result = await metaSocialRule(fakeDOM(), options);
  expect(result.length).toBe(0);
});
