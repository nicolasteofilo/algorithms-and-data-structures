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

  breadthFirstSearchTraversal() {
    let node = this.root;
    const data = [];
    const queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  depthFirstSearchPreOrder() {
    // visit all nodes on the left and then all nodes on the right
    const data = [];
    function traverse(node) {
      if (node.value) data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  depthFirstSearchPostOrder() {
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      if (node.value) data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  depthFirstSearchInOrder() {
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.value) data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.depthFirstSearchPreOrder());
console.log(tree.depthFirstSearchPostOrder());
console.log(tree.depthFirstSearchInOrder());
