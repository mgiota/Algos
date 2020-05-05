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