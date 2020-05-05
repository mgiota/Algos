import { LinkedListNode } from '../../../Data_structures/LinkedList/LinkedList';

const sumLists = (l1, l2, carry = 0) => {
  if (l1 === null && l2 === null && carry === 0) {
    return null;
  }
  const result = new LinkedListNode();
  let value = carry;
  if (l1 !== null) {
    value += l1.data;
  }

  if (l2 !== null) {
    value += l2.data;
  }

  result.data = value % 10;

  if (l1 !== null || l2 !== null) {
    const more = sumLists(l1 === null ? null : l1.next,
                          l2 === null ? null : l2.next,
                          value >= 10 ? 1 : 0);
    result.next = more;
  }
  return result;
}

module.exports = {
  sumLists
}