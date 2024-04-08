import sinon from 'sinon';
import Logger from '../../src/modules/logger';

const logger = new Logger();

// -------- Public method tests -------- //
test('if call method "error" will call logError method', () => {
  const spy = sinon.spy(logger, 'logError');

  logger.error('error');

  expect(spy.called).toBeTruthy();
});

test('if call method "info" will call logInfo method', () => {
  const spy = sinon.spy(logger, 'logInfo');

  logger.info('info');

  expect(spy.called).toBeTruthy();
});

test('if call method "success" will call logSuccess method', () => {
  const spy = sinon.spy(logger, 'logSuccess');

  logger.success('success');

  expect(spy.called).toBeTruthy();
});

test('if call method "result" will call logResult method', () => {
  const spy = sinon.spy(logger, 'logResult');

  logger.result([]);

  expect(spy.called).toBeTruthy();
});

// -------- Private method tests -------- //
test('if call method logError will log error text to console', () => {
  const spy = sinon.spy(console, 'error');
  logger.logError('error');
  expect(spy.called).toBeTruthy();
  console.error.restore();
});

test('if call method logSuccess will log message to console', () => {
  const spy = sinon.spy(console, 'log');
  logger.logSuccess('success');
  expect(spy.called).toBeTruthy();
  console.log.restore();
});

test('if call method logInfo will log message to console', () => {
  const spy = sinon.spy(console, 'log');
  logger.logInfo('info');
  expect(spy.called).toBeTruthy();
  console.log.restore();
});
