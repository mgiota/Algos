const partition = (node, x) => {
  let beforeStart = null;
  let beforeEnd = null;
  let afterStart = null;
  let afterEnd = null;

  while (node !== null) {
    let next = node.next;
    node.next = null;
    if (node.data < x) {
      if (beforeStart === null) {
        beforeStart = node;
        beforeEnd = beforeStart;
      } else {
        beforeEnd.next = node;
        beforeEnd = node;
      }
    } else {
      if (afterStart === null) {
        afterStart = node;
        afterEnd = afterStart;
      } else {
        afterEnd.next = node;
        afterEnd = node;
      }
    }
    node = next;
  }
  if (beforeStart === null) {
    return afterStart;
  }
  beforeEnd.next = afterStart;
  return beforeStart;
};

const partition2 = (node, x) => {
  let head = node;
  let tail = node;

  while (node !== null) {
    const next = node.next;
    if (node.data < x) {
      node.next = head;
      head = node;
    } else {
      tail.next = node;
      tail = node;
    }
    node = next;
  }
  tail.next = null;
  return head;
}

module.exports = {
  partition,
  partition2
};