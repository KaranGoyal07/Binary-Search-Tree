class Node {
  constructor(value, x, y) {
    this.x = x;
    this.y = y;
    this.right = null;
    this.left = null;
    this.value = value;
  }

  // Method for adding nodes to the search tree, either left or right depending on the data
  addNode(node) {
    // Left
    if (node.value < this.value) {
      if (this.left == null) {
        this.left = node;
        this.left.x = this.x - 72;
        this.left.y = this.y + 48;
      } else {
        this.left.addNode(node);
      }
    }

    // Right
    if (node.value > this.value) {
      if (this.right == null) {
        this.right = node;
        this.right.x = this.x + 72;
        this.right.y = this.y + 48;
      } else {
        this.right.addNode(node);
      }
    }
  }

  // Method for visiting each node, in increasing order, and visualizing the search tree
  visit(parent) {
    if (this.left != null) {
      this.left.visit(this);
    }
    console.log(this.value);

    // Display
    strokeWeight(1);
    stroke(220, 100);
    line(parent.x, parent.y, this.x, this.y);
    fill(220);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, 52);
    noStroke();
    fill(50);
    textAlign(CENTER);
    textSize(24);
    text(this.value, this.x, this.y + 8);

    if (this.right != null) {
      this.right.visit(this);
    }
  }
}
