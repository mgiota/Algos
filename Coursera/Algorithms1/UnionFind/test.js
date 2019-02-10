import QuickFind from './QuickFind';
import QuickUnion from './QuickUnion';
import SocialNetwork from './SocialNetwork';
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

describe.only('#SocialNetwork', () => {
  test('fully connected', () => {
    let network = new SocialNetwork(5);
    network.addFriendShip(0, 1, new Date("2018-01-04"));
    network.addFriendShip(2, 3, new Date("2018-01-15"));
    network.addFriendShip(3, 4, new Date("2018-04-16"));
    network.addFriendShip(1, 3, new Date("2018-05-28"));
    const date = network.findEarliestDate();
    console.log(date)
    const expected = expect.stringContaining("2018-05-28");
    expect(date).toEqual(expected)
  })
});
