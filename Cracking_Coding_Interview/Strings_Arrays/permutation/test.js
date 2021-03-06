const index = require('./index');

describe('#permutation', () => {
  test('returns false if 2 strings have different length', () => {
    const result = index.permutation('giota', 'mama');
    expect(result).toEqual(false);
  });

  test('returns true if 2 strings are permutation of each other', () => {
    const result = index.permutation('amma', 'mama');
    expect(result).toEqual(true);
  });

  test('returns false because of case sensitivity ', () => {
    const result = index.permutation('God', 'dog');
    expect(result).toEqual(false);
  });
});

describe('#permutationCharCounts', () => {
  test('returns false if 2 strings have different length', () => {
    const result = index.permutationCharCounts('giota', 'mama');
    expect(result).toEqual(false);
  });

  test('returns true if 2 strings are permutation of each other', () => {
    const result = index.permutationCharCounts('amma', 'mama');
    expect(result).toEqual(true);
  });

  test('returns false because of case sensitivity ', () => {
    const result = index.permutationCharCounts('God', 'dog');
    expect(result).toEqual(false);
  });

  test('returns false because of case sensitivity ', () => {
    const result = index.permutationCharCounts('cat', 'acp');
    expect(result).toEqual(false);
  });
});

describe('#permutationComparison', () => {
  test('returns false if 2 strings have different length', () => {
    const result = index.permutationComparison('giota', 'mama');
    expect(result).toEqual(false);
  });

  test('returns true if 2 strings are permutation of each other', () => {
    const result = index.permutationComparison('amma', 'mama');
    expect(result).toEqual(true);
  });

  test('returns false if 2 strings are not permutation of each other', () => {
    const result = index.permutationComparison('lilmn', 'limmn');
    expect(result).toEqual(false);
  });

  test('returns false because of case sensitivity ', () => {
    const result = index.permutationComparison('God', 'dog');
    expect(result).toEqual(false);
  });

  test('returns false because of case sensitivity ', () => {
    const result = index.permutationComparison('cat', 'acp');
    expect(result).toEqual(false);
  });

  test('returns false because of case sensitivity ', () => {
    const result = index.permutationComparison('nina', 'ninb');
    expect(result).toEqual(false);
  });

  test('returns false when strings differ only on one character count', () => {
    const result = index.permutationComparison('giota', 'giott');
    expect(result).toEqual(false);
  });

  test('returns false when strings differ only on one character count', () => {
    const result = index.permutationComparison('giott', 'giota');
    expect(result).toEqual(false);
  });

  test('returns false when second string contains a character that is not present in the first string', () => {
    const result = index.permutationComparison2('giott', 'giota');
    expect(result).toEqual(false);
  });

  test('returns false when second string contains a character more times that it appears in the first string', () => {
    const result = index.permutationComparison2('giota', 'giott');
    expect(result).toEqual(false);
  });

  test('returns false when ...', () => {
    const result = index.permutationCharArray('giott', 'giota');
    expect(result).toEqual(false);
  });

  test('returns false when ...', () => {
    const result = index.permutationCharArray('giota', 'giott');
    expect(result).toEqual(false);
  });
})
