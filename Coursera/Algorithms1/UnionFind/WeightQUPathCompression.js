class QUPathCompression {
  constructor(n) {
    this.ids = [...Array(n).keys()];
    this.size = Array(n).fill(0);
  }

  root(i) {
    while (i !== this.ids[i]) {
      this.ids[i] = this.ids[this.ids[i]];
      i = this.ids[i];
    }
    return i;
  }

  areConnected(p, q) {
    return this.root(p) === this.root(q);
  }

  union(p, q) {
    if (this.areConnected(p, q)) {
      return;
    }
    const pRoot = this.root(p);
    const qRoot = this.root(q);
    if (this.size[pRoot] < this.size[qRoot]) {
      this.ids[pRoot] = qRoot;
      this.size[qRoot]+= this.size[pRoot];
    } else {
      this.ids[qRoot] = pRoot;
      this.size[pRoot] += this.size[qRoot];
    }
  }
}
