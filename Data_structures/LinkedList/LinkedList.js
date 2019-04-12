class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addAtBeginning(data) {
    const node = new LinkedListNode(data);
    node.next = this.head;
    this.head = node;
    return this.head;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
}


export default LinkedList;
