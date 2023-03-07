class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (value > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else if (value === currentNode.value) {
          return undefined;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    if (this.root.value === value) return true;

    let currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (currentNode.value === value) found = true;
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }
    return currentNode ? currentNode : false;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(3);
tree.insert(4);
tree.insert(2);

console.log(tree.find(2));
console.log(tree.find(8));
