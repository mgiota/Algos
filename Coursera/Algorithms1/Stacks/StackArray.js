class StackArray {
  constructor(n) {
    this.elements = new Array(n);
    this.index = 0;
  }

  push(item) {
    this.elements[this.index++] = item;
  }

  pop() {
    const i = this.index - 1;
    return this.elements[i];
  }

  isEmpty() {
    return this.index === 0;
  }
}

export default StackArray;
