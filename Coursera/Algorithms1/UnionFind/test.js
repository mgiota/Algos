import QuickFind from './QuickFind';
import QuickUnion from './QuickUnion';


describe('#QuickFind', () => {
  let uf;
  beforeEach(() => {
    uf = new QuickFind(10);
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


describe('#Quick Union', () => {
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
