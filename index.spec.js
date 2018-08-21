const fp = require('lodash/fp');
const pairedMap = require('./index.js');

it('should be a function', () => {
  expect(typeof pairedMap).toBe('function');
});

it('should carry args', () => {
  expect(typeof pairedMap(fp.identity)).toBe('function');
});

it('should change key', () => {
  expect(pairedMap(([key, value]) => [`_${key}`, value])({ a: 1 })).toEqual({ _a: 1 });
});

it('should change value', () => {
  expect(pairedMap(([key, value]) => [key, `_${value}`])({ a: 1 })).toEqual({ a: '_1' });
});

it('should accept two args at the same time', () => {
  expect(pairedMap(([key, value]) => [`_${key}`, `_${value}`], { a: 1 })).toEqual({ '_a': '_1' });
});
