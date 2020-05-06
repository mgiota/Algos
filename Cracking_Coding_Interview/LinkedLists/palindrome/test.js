const index = require('./index');
import LinkedList from '../../../Data_structures/LinkedList/LinkedList';
import { LinkedListNode } from '../../../Data_structures/LinkedList/LinkedList';

describe('#reverse linked list', () => {
  test('#reverses linked list recursively', () => {
    const ll = new LinkedList();
    ll.addAtBeginning(4);
    ll.addAtBeginning(3);
    ll.addAtBeginning(2);
    ll.addAtBeginning(1);

    const result = index.reverse(ll.head);
    expect(result.data).toEqual(4);
    expect(result.next.data).toEqual(3);
    expect(result.next.next.data).toEqual(2);
    expect(result.next.next.next.data).toEqual(1);

  });
});

describe('#isPalindrome', () => {
  test('#returns true', () => {
    const ll = new LinkedList();
    ll.addAtBeginning(0);
    ll.addAtBeginning(1);
    ll.addAtBeginning(2);
    ll.addAtBeginning(1);
    ll.addAtBeginning(0);

    const listItems = ll.print();
    const result = index.isPalindrome(ll.head);
    expect(result).toEqual(true);
  });
})