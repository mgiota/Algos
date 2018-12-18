const isUnique = require('./index.js');

test('returns true if it isUnique', () => {
  const result = isUnique('giota');
  expect(result).toEqual(true);
});

test('returns false if it is not unique', () => {
  const result = isUnique('edessa');
  expect(result).toEqual(false);
});

test('returns true is string is empty', () => {
  const result = isUnique('');
  expect(result).toEqual(true);
});
