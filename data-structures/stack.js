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
    if (!this.fist) return null;
    const tmp = this.fist;

    if (this.fist === this.last) {
      this.last = null;
    }
    this.fist = this.fist.next;

    return tmp.val;
  }
}

const stack = new Stack();
stack.push('Harry');
stack.push('Ron');
console.log(stack)
stack.pop();
console.log(stack)

/*
Insertion - O(1)
Removal - O(1)
Search - O(N)
Access - O(N)
*/
