import LinkedList from './LinkedList';

describe('#LinkedList', () => {
  //context('#add element at the beginning', () => {
    it('should add an element to an empty list', () => {
      const ll = new LinkedList();
      ll.addAtBeginning(1);

      expect(ll.head.data).toEqual(1);
    });

    it('shoud add an element to a non empty list', () => {
      const ll = new LinkedList();
      ll.addAtBeginning(1);
      ll.addAtBeginning(2);

      expect(ll.head.data).toEqual(2);
      expect(ll.head.next.data).toEqual(1);
    });
  //});

});
