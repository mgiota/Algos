const printKthToLast = (head, k) => {
  if (head === null) {
    return 0;
  }
  const index = printKthToLast(head.next, k) + 1;
  console.log(`INDEX: ${index} | DATA: ${head.data}`);
  if (index === k) {
    console.log(`${k} to last element is ${head.data}`);
  }
  return index;
}

const kthToLast = (head, k, index = { value: 0}) => {
  if (head === null) {
    return null;
  }
  console.log(`INDEXX: ${index.value}`)
  let node = kthToLast(head.next, k, index);

  index.value = index.value + 1;

  console.log(`Index: ${index.value} | Data: ${head.data} | Node: ${node && node.data}`)
  if (index.value === k) {
    return head;
  }
  return node;
}

module.exports = {
  printKthToLast,
  kthToLast
};