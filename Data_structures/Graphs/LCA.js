class LCA {
  constructor() {
    this.path1 = [];
    this.path2 = [];
    this.root = null;
  }

  findLCA(n1, n2) {
    if (!this.findPath(this.root, n1, { path1: this.path1 }) || !this.findPath(this.root, n2, { path2: this.path2} )) {
      console.log(this.path1.length > 0 ? "n1 is present" : "n1 is missing");
      console.log(this.path2.length > 0 ? "n2 is present" : "n2 is missing");
      return -1;
    }

    let i;
    for (i = 0; i < this.path1.length && i < this.path2.length; i++) {
      if (this.path1[i] !== this.path2[i]) {
        break;
      }
    }
    return this.path1[i - 1];
  }

  findPath(root, node, { path1, path2}) {
    console.log(path1, "!!path1");
    console.log(path2, "!!path2")

    if (root === null) {
      return false;
    }

    if (path1) {
      this.path1.push(root.data);
    }

    if (path2) {
      this.path2.push(root.data);
    }

    if (root.data === node) {
      return true;
    }

    // console.log(root.left, '!!left')
    if (root.left !== null) {
      if (this.findPath(root.left, node, { path1: this.path1 })) {
        return true;
      }
    }

    if (root.right !== null && this.findPath(root.right, node, { path2: this.path2 })) {
      return true;
    }

    return false;
  }
}

export default LCA;
