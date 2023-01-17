class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);
    if (this.length <= 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return node;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const currrentHead = this.head;
    this.head = currrentHead.next;
    this.length--;
    if (this.length < 1) this.tail = null;
    return currrentHead.val;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return newNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let indexCounter = 0;
    let currentNode = this.head;

    while (indexCounter != index) {
      indexCounter++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const prevNode = this.get(index - 1);
    const newNode = new Node(val);
    const afterNode = prevNode.next;
    newNode.next = afterNode;
    prevNode.next = newNode;

    this.length++;
    return true
  }
}
