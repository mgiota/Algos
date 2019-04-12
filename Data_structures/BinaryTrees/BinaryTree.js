class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null
  }
}

class BinaryTree {
  constructor(data) {
    const node = new Node(data);
    this.root = node;
  }

  DFS() {
    let stack = [];
    stack.push(this.root);

    while (stack.length > 0) {
      let node = stack.pop();
      if (node.left !== null) {
        stack.push(node.left);
      }
      if (node.right !== null) {
        stack.push(node.right);
      }
      console.log(node.data);
    }
  }

  inOrder(node) {
      if (node !== null) {
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
      }
  }

  preOrder(node) {
    if(node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.preOrder(node.left);
      this.preOrder(node.right);
      console.log(node.data);
    }
  }
}

export default BinaryTree;
