import { LinkedListNode } from '../../../Data_structures/LinkedList/LinkedList';
import LinkedList from '../../../Data_structures/LinkedList/LinkedList';

const reverse = head => {
  if (head === null) {
    return null;
  }

  if (head.next === null) {
    return head;
  }

  let newHeadNode = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return newHeadNode;
}

module.exports = {
  reverse
}