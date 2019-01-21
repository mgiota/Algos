const index = require('./index.js');

describe('', () => {
  test('', () => {
    const result = index.groupAnagrams(['acre', 'race', 'care', 'hello', 'giota', 'atigo']);
    const expected = ["acre", "race", "care", "hello", "giota", "atigo"];
    expect(result).toEqual(expected);
  });
});
