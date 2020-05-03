const index = require('./index');
import LinkedList from '../../../Data_structures/LinkedList/LinkedList';

describe('#printNthToLast recursive', () => {
  test('prints 2nd to last element', () => {
    const ll = new LinkedList();
    ll.addAtBeginning(5);
    ll.addAtBeginning(4);
    ll.addAtBeginning(3);
    ll.addAtBeginning(2);
    ll.addAtBeginning(1);

    const result = index.printKthToLast(ll.head, 2);
  });
});

describe('#kthToLast recursive', () => {
  test('returns 2nd to last element', () => {
    const ll = new LinkedList();
    ll.addAtBeginning(5);
    ll.addAtBeginning(4);
    ll.addAtBeginning(3);
    ll.addAtBeginning(2);
    ll.addAtBeginning(1);

    const result = index.kthToLast(ll.head, 2);
    expect(result.data).toEqual(4);
  });
});