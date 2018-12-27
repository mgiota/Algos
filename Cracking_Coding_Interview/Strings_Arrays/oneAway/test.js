const index = require('./index');

describe('#oneAway', () => {
  test('replace one character returns true', () => {
    const result = index.oneEditAway('pale', 'bale');
    expect(result).toEqual(true);
  });

  test('replace two characters returns false', () => {
    const result = index.oneEditAway('pale', 'bole');
  });
});

describe('#oneAway', () => {
  test('add one character returns true', () => {
    const result = index.oneEditAway('bale', 'bales');
    expect(result).toEqual(true);
  });

  test('add two characters returns false', () => {
    const result = index.oneEditAway('bale', 'balese');
    expect(result).toEqual(false);
  });

  test('replace and remove returns false', () => {
    const result = index.oneEditAway('pale', 'bae');
    expect(result).toEqual(false);
  });
});
