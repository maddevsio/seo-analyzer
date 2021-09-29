import test from 'ava';
import sinon from 'sinon';
import Logger from '../../src/modules/logger';

const logger = new Logger();

// -------- Public method tests -------- //
test('if call method "error" will call _logError method', t => {
  const spy = sinon.spy(logger, '_logError');

  logger.error('error');

  t.truthy(spy.called);
  logger._logError.restore();
});

test('if call method "info" will call _logInfo method', t => {
  const spy = sinon.spy(logger, '_logInfo');

  logger.info('info');

  t.truthy(spy.called);
  logger._logInfo.restore();
});

test('if call method "success" will call _logSuccess method', t => {
  const spy = sinon.spy(logger, '_logSuccess');

  logger.success('success');

  t.truthy(spy.called);
  logger._logSuccess.restore();
});

test('if call method "result" will call _logResult method', t => {
  const spy = sinon.spy(logger, '_logResult');

  logger.result([]);

  t.truthy(spy.called);
  logger._logResult.restore();
});

// -------- Private method tests -------- //
test('if call method _logError will log error text to console', t => {
  const spy = sinon.spy(console, 'error');

  logger._logError('error');

  t.truthy(spy.called);
  console.error.restore();
});

test('if call method _logSuccess will log message to console', t => {
  const spy = sinon.spy(console, 'log');

  logger._logSuccess('success');

  t.truthy(spy.called);
  console.log.restore();
});

test('if call method _logInfo will log message to console', t => {
  const spy = sinon.spy(console, 'log');

  logger._logInfo('info');

  t.truthy(spy.called);
  console.log.restore();
});
