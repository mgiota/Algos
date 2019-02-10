// Avoid tall trees
class WeightQuickUnion {
  constructor(n) {
    this.ids = Array.from(Array(n).keys());
    this.size = Array(n).fill(0);
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
    const pRoot = this.root(p);
    const qRoot = this.root(q);
    const pSize = this.size(pRoot)
    const qSize = this.size(qRoot);
    if (pRoot === qRoot) return;
    if (pSize < qSize) {
      this.ids[pRoot] = qRoot;
      this.size[qRoot] += pSize;
    } else {
      this.ids[qRoot] = pRoot;
      this.size[pRoot] += qSize;
    }
  }

}

export default WeightQuickUnion;
