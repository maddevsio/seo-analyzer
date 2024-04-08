import Index from '../src/index';

test('if arg "rule" is type of "function" then rule push to array', () => {
  const index = new Index();
  index.addRule(() => Promise.resolve([]));
  expect(index.rules.length).toBe(1);
});

test('if arg "rule" is not type of "function" then not push to array', () => {
  const index = new Index();
  index.addRule(1 as any);
  expect(index.rules.length).toBe(0);
});
