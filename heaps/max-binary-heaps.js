class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (
      parentIndex >= 0 &&
      this.values[parentIndex] < this.values[currentIndex]
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

      const maxChildIndex = this.values[right] > this.values[left] ? right : left;

      if (this.values[maxChildIndex] > this.values[i]) {
        const temp = this.values[i];
        this.values[i] = this.values[maxChildIndex];
        this.values[maxChildIndex] = temp;

        i = maxChildIndex;
      } else {
        break;
      }
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.bubbleDown();
    return max;
  }

  log() {
    console.log(this.values);
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.log();
heap.extractMax();
heap.log();
