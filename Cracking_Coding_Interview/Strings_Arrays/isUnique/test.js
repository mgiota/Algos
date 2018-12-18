const index = require('./index.js');

describe('#isUnique', () => {
  test('returns true if it is unique', () => {
    const result = index.isUnique('giota');
    expect(result).toEqual(true);
  });

  test('returns false if it is not unique', () => {
    const result = index.isUnique('edessa');
    expect(result).toEqual(false);
  });

  test('returns true is string is empty', () => {
    const result = index.isUnique('');
    expect(result).toEqual(true);
  });
});

describe('#isUniqueNoDataStrucure', () => {
  test('returns true if it is unique', () => {
    const result = index.isUniqueNoDataStrucure('giota');
    expect(result).toEqual(true);
  });

  test('returns false if it is not unique', () => {
    const result = index.isUniqueNoDataStrucure('edessa');
    expect(result).toEqual(false);
  });

  test('returns true if string is empty', () => {
    const result = index.isUniqueNoDataStrucure('');
    expect(result).toEqual(true);
  });
})
