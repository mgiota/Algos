import { LinkedListNode } from '../../../Data_structures/LinkedList/LinkedList';
import LinkedList from '../../../Data_structures/LinkedList/LinkedList';

const reverse = head => {
  if (head.next === null) {
    return head;
  }

  let newHeadNode = reverse(head.next);
  head.next.next = head;
  head.next = null; // even if I comment this, it works, only issue is that next node of last node (1) still points to the previous next node (2), it should be null instead
  return newHeadNode;
}

const isPalindrome = head => {
  const reversed = reverse(JSON.parse(JSON.stringify(head))); // deep copy
  // const reversed = reverse({...head}); // shallow copy
  return isEqual(head, reversed);
}

const isEqual = (node1, node2) => {
  console.log(node1)
  while (node1 !== null && node2 !== null) {
    console.log(`NODE1: ${node1.data} | NODE2: ${node2.data} | ${ node1.data === node2.data }`)
    if (node1.data !== node2.data) {
      return false;
    }

    node1 = node1.next;
    node2 = node2.next;
  }

  return node1 === null && node2 === null;
}

module.exports = {
  isPalindrome,
  reverse
}