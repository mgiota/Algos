import removeDuplicates, { removeDuplicates2 } from './removeDuplicates';
import LinkedList from '../../Data_structures/LinkedList/LinkedList';

describe('#removeDuplicates', () => {
  it('should remove duplicates from linkedList', () => {
    let ll = new LinkedList();
    ll.addAtBeginning(1);
    ll.addAtBeginning(3);
    ll.addAtBeginning(2);
    ll.addAtBeginning(2);
    ll.addAtBeginning(1);
    removeDuplicates(ll);
    expect(ll.print()).toEqual([1, 2, 3]);
  });

  it('should remove duplicates from linkedList without extra buffer', () => {
    let ll = new LinkedList();
    ll.addAtBeginning(1);
    ll.addAtBeginning(3);
    ll.addAtBeginning(2);
    ll.addAtBeginning(2);
    ll.addAtBeginning(1);
    removeDuplicates2(ll);
    expect(ll.print()).toEqual([1, 2, 3]);
  })
});
