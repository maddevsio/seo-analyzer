import { JSDOM } from 'jsdom';
import metaBaseRule from '../../src/rules/MetaBaseRule';

const fakeDOM = (content?: any): JSDOM => ({
  window: {
    // @ts-ignore
    document: {
      querySelector: () => content
    }
  }
});

test('if document not exists base meta tags description & viewport, return ["This HTML is missing a <meta name="description"> tag", "This HTML is missing a <meta name="viewport"> tag"]', async () => {
  const options = { names: ['description', 'viewport'] };
  const result = await metaBaseRule(fakeDOM(), options);
  expect(result).toStrictEqual([
    'This HTML is missing a <meta name="description"> tag',
    'This HTML is missing a <meta name="viewport"> tag'
  ]);
});

test('if document exists base meta tags description & viewport but content is empty, return ["The content attribute for the <meta name="description" content=""> tag is empty", "The content attribute for the <meta name="viewport" content=""> tag is empty"]', async () => {
  const options = { names: ['description', 'viewport'] };
  const result = await metaBaseRule(fakeDOM({ content: '' }), options);
  expect(result).toStrictEqual([
    'The content attribute for the <meta name="description" content=""> tag is empty',
    'The content attribute for the <meta name="viewport" content=""> tag is empty'
  ]);
});

test('if document exists base meta tags description & viewport, return []', async () => {
  const options = { names: ['description', 'viewport'] };
  const result = await metaBaseRule(fakeDOM({ content: 'content' }), options);
  expect(result.length).toBe(0);
});

test('if names is empty, return []', async () => {
  const options = { names: [] };
  const result = await metaBaseRule(fakeDOM(), options);
  expect(result.length).toBe(0);
});
