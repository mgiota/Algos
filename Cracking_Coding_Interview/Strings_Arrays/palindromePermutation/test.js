const index = require('./index');

describe.only('#palindrome permutation', () => {
  test('returns true if string is a permutation of palindrome', () => {
    const str = 'Tact Coa';
    expect(index.palindromePermutation(str)).toEqual(true);
  });

  test('returns false if string is not a permutation of palindrome', () => {
    const str = 'Tact Coas';
    expect(index.palindromePermutation(str)).toEqual(false);
  });
});

describe('#palindrome permutation with char mapping', () => {
  test('returns true if string is a permutation of palindrome', () => {
    const str = 'Tact Coa';
    expect(index.palindromPermutationWithMapping(str)).toEqual(true);
  });
});

describe('#palindrome permutation with bitwise operators', () => {
  test('returns true if string is a permutation of palindrome', () => {
    const str = 'Tact Coa';
    expect(index.palindromePermutationNoCounts(str)).toEqual(true);
  });
});

describe('#palindrome permutation with bitwise operators', () => {
  test('returns true if string is a permutation of palindrome', () => {
    const str = 'Tact Coa';
    expect(index.palindromePermutationOptimize(str)).toEqual(true);
  });
});
