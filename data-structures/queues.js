class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.fist = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) { // push
    const newNode = new Node(val);

    if (!this.fist) {
      this.fist = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() { // shift
    if (!this.fist) return null;
    const tmp = this.fist;
    if (this.fist === this.last && this.size === 1) {
      this.fist = null;
      this.last = null;
    } else {
      this.fist = this.fist.next;
    }
    this.size--;
    return tmp.val;
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = { Queue }

/*
FIFO (first-in first-out), primeiro elemento a ser inserido, é o primeiro a ser retirado.

Big O
Insertion - O(1)
Removal - O(1)
Search - O(N)
Access - O(N)
*/
