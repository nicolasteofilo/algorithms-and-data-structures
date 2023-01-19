class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return node;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    const node = new Node(val);
    const oldHead = this.head;

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      oldHead.prev = node;
      node.next = oldHead;
      this.head = node;
    }

    this.length++;
    return node;
  }

  get(index) {
    if(index < 0 || index >= this.length) return null;
    const halfLength = Math.floor(this.length / 2)

    let currentIndex;
    let currentNode;

    if(index <= halfLength) {
      currentNode = this.head;
      currentIndex = 0;
      while(currentIndex !== index) {
        currentNode = currentNode.next;
        currentIndex++;
      }
    }

    if(index > halfLength) {
      currentIndex = this.length + -1;
      currentNode = this.tail;
      while(currentIndex !== index) {
        currentNode = currentNode.prev;
        currentIndex--;
      }
    }

    return currentNode;
  }

  set(index, val) {
    const node = this.get(index);
    return node ? (node.val = val, true): false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const afterNode = prevNode.next;

    prevNode.next = newNode, newNode.prev = prevNode;
    afterNode.prev = newNode, newNode.next = afterNode;

    this.length++;
    return newNode
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const after = removedNode.next;

    beforeNode.next = after;
    after.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}
