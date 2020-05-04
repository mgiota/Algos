const index = require('./index');
import LinkedList from '../../../Data_structures/LinkedList/LinkedList';

describe('#partition a LinkedList using 2 lists with 4 variables', () => {
  test('#partition list', () => {
    const ll = new LinkedList();
    ll.addAtBeginning(1);
    ll.addAtBeginning(2);
    ll.addAtBeginning(10);
    ll.addAtBeginning(5);
    ll.addAtBeginning(8);
    ll.addAtBeginning(5);
    ll.addAtBeginning(3);

    const listItems = ll.print();
    //console.log(listItems);

    let node = index.partition(ll.head, 5);
    while (node !== null) {
      let next = node.next;
      //console.log(node.data);
      node = next;
    }
  });
});

describe('#partition a LinkedList using 2 lists with 2 variables', () => {
  test('#partition list', () => {
    const ll = new LinkedList();
    ll.addAtBeginning(1);
    ll.addAtBeginning(2);
    ll.addAtBeginning(10);
    ll.addAtBeginning(5);
    ll.addAtBeginning(8);
    ll.addAtBeginning(5);
    ll.addAtBeginning(3);

    let node = index.partition2(ll.head, 5);
    expect(node.data).toEqual(1);
    expect(node.next.data).toEqual(2);
    expect(node.next.next.data).toEqual(3);
    expect(node.next.next.next.data).toEqual(5);
    expect(node.next.next.next.next.data).toEqual(8);
    expect(node.next.next.next.next.next.data).toEqual(5);
    expect(node.next.next.next.next.next.next.data).toEqual(10);

    while (node !== null) {
      let next = node.next;
      //console.log(node.data);
      node = next;
    }

  })
});