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

const sumListsIterative = (n1, n2) => {
  let carry = 0;
  let sum;
  let result = null;
  let prev = null;
  let temp = null;

  while (n1 !== null || n2 !== null) {
    sum = carry;
    if (n1 !== null) {
      sum += n1.data;
    }

    if (n2 !== null) {
      sum += n2.data;
    }

    carry = (sum >= 10) ? 1 : 0;
    sum = sum % 10;
    temp = new LinkedListNode(sum);

    if (result === null) {
      result = temp;
    } else {
      prev.next = temp;
    }

    prev = temp;

    if (n1 !== null) {
      n1 = n1.next;
    }

    if (n2 !== null) {
      n2 = n2.next;
    }
  }

  if (carry > 0) {
    temp.next = new LinkedListNode(carry);
  }
  console.log(result)
  return result;
}

module.exports = {
  sumLists,
  sumListsIterative
}