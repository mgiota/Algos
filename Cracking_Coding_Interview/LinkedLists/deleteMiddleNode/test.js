const index = require('./index');

class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

describe('#deleteMiddleNode', () => {
  test('#deletes middle node', () => {
    let n1 = new LinkedListNode(1);
    let n2 = new LinkedListNode(2);
    let n3 = new LinkedListNode(3);
    let n4 = new LinkedListNode(4);
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;

    const result = index.deleteMiddleNode(n3);
    expect(n2.next.data).toEqual(4);
  });
});