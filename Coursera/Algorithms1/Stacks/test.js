import Stack from './Stack';
import StackLL from './StackLL';
import StackArray from './StackArray';
import StackResizingArray from './StackResizingArray';

describe('#Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  test('constructor', () => {
    expect(stack.size()).toEqual(0);
  });

  test('adding an element to an empty stack', () => {
    stack.push(1);
    expect(stack.size()).toEqual(1);
    expect(stack.elements[0]).toEqual(1);
  });

  test('adding more elements to a stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size()).toEqual(3);
    expect(stack.elements).toContain(1);
    expect(stack.elements).toContain(2);
    expect(stack.elements).toContain(3);
  });
});

describe('#StackArray', () => {
  let stack;
  beforeEach(() => {
    stack = new StackArray(10);
  });
  test('add element to the stack', () => {
    stack.push(1);
    expect(stack.index).toEqual(1);
  });

  test('remove element from the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    console.log(stack.elements)
    expect(stack.index).toEqual(3);
  });
});

describe('#StackLL', () => {
  let stack;
  beforeEach(() => {
    stack = new StackLL();
  });
  test('constructor', () => {
    expect(stack.head).toEqual(null);
  });

  test('adding an element to an empty stack', () => {
    stack.push(1);
    expect(stack.head).toEqual({
      value: 1,
      next: null
    });
  });

  test('adding an element in a non empty stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.head).toEqual({
      value: 2,
      next: {
        value: 1,
        next: null
      }
    })
  });

  test('removing an element from an empty stack', () => {
    const item = stack.pop();
    expect(item).toEqual(null);
  });

  test('removing an element from a non empty stack', () => {
    stack.push(1);
    stack.push(2);
    const item = stack.pop();
    expect(item.value).toEqual(2);
    expect(stack.head.value).toEqual(1);
  });
});


describe.only('#StackResizingArray', () => {
  let stack;
  beforeEach(() => {
    stack = new StackResizingArray();
  });
  test('add element to the stack', () => {
    stack.push(1);
    expect(stack.N).toEqual(1);
  });

  test('remove element from the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    console.log(stack.elems)
    expect(stack.N).toEqual(3);
  });
});
