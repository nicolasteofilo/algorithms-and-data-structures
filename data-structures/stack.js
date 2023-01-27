class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class Stack {
    constructor() {
        this.fist = null;
        this.last = null;
        this.size = 0;
    }

  push(val) {
    const newNode = new Node(val);
    if (!this.fist) {
      this.fist = newNode;
      this.last = newNode;
    } else {
      const tmp = this.fist;
      this.fist = newNode;
      this.fist.next = tmp;
    }
    return ++this.size;
  }

  pop() {
    if (this.size === 1) {
      this.fist = null;
      this.last = null;
    } else {
      const tmp = this.fist.next;
      this.fist = tmp;
    }
    this.size--;
  }
}

const stack = new Stack();
stack.push('Harry');
stack.push('Ron');
console.log(stack)
stack.pop();
console.log(stack)
