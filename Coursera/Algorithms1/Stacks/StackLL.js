class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackLL {
  constructor() {
    this.head = null;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  pop() {
    const head = this.head;
    if (head) {
      this.head = head.next;
      head.next = null;
    }
    return head;
  }

  isEmpty() {
    return this.head === null;
  }
}

export default StackLL;
