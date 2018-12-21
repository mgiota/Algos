import UF from './UF';
import QuickUnion from './QuickUnion';


describe('#UF', () => {
  let uf;
  beforeEach(() => {
    uf = new UF(10);
  });

  test('constructor', () => {
    expect(uf.ids.length).toEqual(10);
  });

  test('returns true if elements are connected', () => {
    uf.union(1, 2);
    console.log(uf.ids)
    expect(uf.areConnected(1,2)).toEqual(true);
  });

  test('returns false if elements are not connected', () => {
    uf.union(1, 2);
    console.log(uf.ids)
    expect(uf.areConnected(1,3)).toEqual(false);
  });
});


describe.only('#Quick Union', () => {
  let qu;
  beforeEach(() => {
    qu = new QuickUnion(10);
  });

  test('constructor', () => {
    expect(qu.ids.length).toEqual(10);
  });

  test('returns true if elements are connected', () => {
    qu.union(1, 2);
    console.log(qu.ids)
    expect(qu.connected(1,2)).toEqual(true);
  });

  test('returns false if elements are not connected', () => {
    qu.union(1, 2);
    console.log(qu.ids)
    expect(qu.connected(1,3)).toEqual(false);
  });
});
