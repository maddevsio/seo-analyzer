import test from 'ava';
import metaSocialRule from '../../src/rules/MetaSocialRule';

const fakeDOM = content => ({
  window: {
    document: {
      querySelector: () => content
    }
  }
});

test('if document not exists social meta tags, return array with errors', async t => {
  const options = { properties: [
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
  ]};
  const result = await metaSocialRule(fakeDOM(), options);
  t.deepEqual(result[0], 'This HTML is missing a <meta property="og:url"> tag');
});

test('if document exists social meta tags but property is empty, return array with errors', async t => {
  const options = { properties: [
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
  ]};
  const result = await metaSocialRule(fakeDOM({ content: '' }), options);
  t.deepEqual(result[0], 'The content attribute for the <meta property="og:url" content=""> tag is empty');
});

test('if document exists social meta tags description & viewport, return []', async t => {
  const options = { properties: [
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
  ]};
  const result = await metaSocialRule(fakeDOM({ content: 'content' }), options);
  t.deepEqual(result, []);
});

test('if option names is empty, return []', async t => {
  const options = { properties: [] };
  const result = await metaSocialRule(fakeDOM(), options);
  t.deepEqual(result, []);
});
