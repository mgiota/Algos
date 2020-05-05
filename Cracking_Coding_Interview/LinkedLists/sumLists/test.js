const index = require('./index');
import LinkedList from '../../../Data_structures/LinkedList/LinkedList';
import { LinkedListNode } from '../../../Data_structures/LinkedList/LinkedList';

describe('#sum lists recursive', () => {
  test('#', () => {
    const n1_1 = new LinkedListNode(7);
    const n1_2 = new LinkedListNode(1);
    const n1_3 = new LinkedListNode(6);

    n1_1.next = n1_2;
    n1_2.next = n1_3;

    const n2_1 = new LinkedListNode(5);
    const n2_2 = new LinkedListNode(9);
    const n2_3 = new LinkedListNode(2);

    n2_1.next = n2_2;
    n2_2.next = n2_3;

    const res = index.sumLists(n1_1, n2_1);
    expect(res.data).toEqual(2);
    expect(res.next.data).toEqual(1);
    expect(res.next.next.data).toEqual(9);
  });
});

describe('#sum lists iterative', () => {
  test('#testcase 1', () => {
    const n1_1 = new LinkedListNode(7);
    const n1_2 = new LinkedListNode(1);
    const n1_3 = new LinkedListNode(6);

    n1_1.next = n1_2;
    n1_2.next = n1_3;

    const n2_1 = new LinkedListNode(5);
    const n2_2 = new LinkedListNode(9);
    const n2_3 = new LinkedListNode(2);

    n2_1.next = n2_2;
    n2_2.next = n2_3;

    const res = index.sumListsIterative(n1_1, n2_1);
    expect(res.data).toEqual(2);
    expect(res.next.data).toEqual(1);
    expect(res.next.next.data).toEqual(9);
  });

  test('#testcase 2', () => {
    const n1_1 = new LinkedListNode(3);
    const n1_2 = new LinkedListNode(1);

    n1_1.next = n1_2;

    const n2_1 = new LinkedListNode(8);
    const n2_2 = new LinkedListNode(9);

    n2_1.next = n2_2;

    const res = index.sumListsIterative(n1_1, n2_1);
    expect(res.data).toEqual(1);
    expect(res.next.data).toEqual(1);
    expect(res.next.next.data).toEqual(1);
  });
});