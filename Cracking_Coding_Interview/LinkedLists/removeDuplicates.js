// O(N), where N is the number of elements in the linked list
const removeDuplicates = ll => {
  let previous = null;
  let current = ll.head;
  let nodes = new Set();
  while (current !== null) {
    if (nodes.has(current.data)) {
      previous.next = current.next;
    } else {
      nodes.add(current.data);
      previous = current;
    }

    current = current.next;
  }
}

export function removeDuplicates2(ll) {
  let current = ll.head;
  while (current !== null) {
    let runner = current;
    while (runner.next !== null) {
      if (runner.next.data === current.data) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
}

export default removeDuplicates;
