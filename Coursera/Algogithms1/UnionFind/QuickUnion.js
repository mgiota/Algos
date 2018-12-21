class QuickUnion {
  constructor(n) {
    this.ids = Array.from(Array(n).keys());
  }

  root(i) {
    while (this.ids[i] !== i) {
      i = this.ids[i];
    }
    return i;
  }

  connected(p, q) {
    return this.root(p) === this.root(q);
  }

  union(p, q) {
    const qRoot = this.root(q);
    const pRoot = this.root(p);
    this.ids[pRoot] = qRoot;
  }
}

export default QuickUnion;
