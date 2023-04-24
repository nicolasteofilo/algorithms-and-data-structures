class Node {
  constructor(value, priority) {
    this.val = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (
      parentIndex >= 0 &&
      this.values[parentIndex].priority > this.values[currentIndex].priority
    ) {
      const tmp = this.values[currentIndex];
      this.values[currentIndex] = this.values[parentIndex];
      this.values[parentIndex] = tmp;
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  bubbleDown() {
    let i = 0;

    while (true) {
      const left = 2 * i + 1;
      const right = left + 1;

      const maxChildIndex = this.values[right]?.priority < this.values[left]?.priority ? right : left;

      if (this.values[maxChildIndex]?.priority < this.values[i]?.priority) {
        const temp = this.values[i];
        this.values[i] = this.values[maxChildIndex];
        this.values[maxChildIndex] = temp;

        i = maxChildIndex;
      } else {
        break;
      }
    }
  }

  dequeue() {
    if (this.values.length === 1) {
      const val = this.values.pop();
      return val;
    } else {
      const min = this.values[0];
      const end = this.values.pop();
      this.values[0] = end;
      this.bubbleDown();
      return min;
    }
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

module.exports = { PriorityQueue };
