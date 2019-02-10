// integer array id[] of size N representing a set of trees (forest)
// id[i] is parent of i
// Union: set the id of p's root to the id of q's root
// We take the 1st item and make it a child of the root of the tree containing the 2nd item

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
