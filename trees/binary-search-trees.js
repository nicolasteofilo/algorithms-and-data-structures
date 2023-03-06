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

    if(!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while(true) {
        if (value < currentNode.value) {
          if(currentNode.left === null) {
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
        } else if(value === currentNode.value) {
          return undefined;
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(3);
tree.insert(4);
tree.insert(2);

console.log(JSON.stringify(tree, null, 2));
