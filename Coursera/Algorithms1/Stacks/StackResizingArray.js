class StackResizingArray {
  constructor() {
    this.elems = new Array(1);
    this.N = 0;
  }

  push(item) {
    const size = this.size();
    if (this.N === size) {
      this.resize(2 * size);
      const index = this.N;
      this.N++;
      this.elems[index] = item;
    }
  }

  pop() {
    const size = this.size();
    const index = this.N - 1;
    const item = this.elems[index];
    this.elems[index] = null;
    if (this.N > 0 && this.N === size/4) {
      this.resize(size/2);
    }
    return item;
  }

  resize(capacity) {
    let arr = new Array(capacity);
    for (let i = 0; i < this.N; i++) {
      arr[i] = this.elems[i];
    }
    this.elems = arr;
  }

  size() {
    return this.N;
  }
}

export default StackResizingArray;
