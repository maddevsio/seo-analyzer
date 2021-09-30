import test from 'ava';
import Index from '../src/index';

test('if arg "rule" is type of "function" then rule push to array', t => {
  const index = new Index();
  index.addRule(() => {});
  t.true(index._rules.length === 1);
});

test('if arg "rule" is not type of "string" or "function" then not push to array', t => {
  const index = new Index();
  index.addRule(1);
  t.true(index._rules.length === 0);
});
