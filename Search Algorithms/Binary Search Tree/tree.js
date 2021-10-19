class Tree {
  constructor() {
    this.root = null;
  }

  // Method for setting the root node and then adding other nodes to the root node by recursion
  addValue(value) {
    let node = new Node(value, width / 2 - 16, 72);
    if (this.root == null) {
      this.root = node;
    } else {
      this.root.addNode(node);
    }
  }

  // Wrapper function/method calling Node.visit()
  traverse() {
    this.root.visit(this.root);
  }
}
