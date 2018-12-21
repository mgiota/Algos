import index from './index';

describe('#urlify', () => {
  test('replaces spaces in a string with %20', () => {
    const str = "This is just a test     ";
    const res = index.urlify(str, 19);
  });
});

describe.only('#urlify in place', () => {
  test('replaces spaces in a string with %20', () => {
    const str = "This is just a test     ";
    const res = index.urlify2(str, 19);
  });
});
