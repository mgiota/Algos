const index = require('./index.js');

describe('#sortedMerge', () => {
  test('#1', () => {
    const arr1 = [2, 3, 6, 7];
    const arr2 = [1, 5, 8, 9];
    const result = index.sortedMerge(arr1, arr2, 4, 4);
    expect(result).toEqual([1, 2, 3, 5, 6, 7, 8, 9]);
  });

  test('...', () => {
    const arr1 = [5, 6, 7, 8];
    const arr2 = [1, 2, 3, 4];

    const result = index.sortedMerge(arr1, arr2, 4, 4);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
