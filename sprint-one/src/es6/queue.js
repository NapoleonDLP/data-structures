class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.front = 0;
    this.back = 0;
  }

  // add enqueue
  enqueue(value) {
    this.storage[this.back] = value;
    this.back++;
  }

  // add dequeue
  dequeue() {
    var value = this.storage[this.front];
    delete this.storage[this.front];
    this.back > this.front && this.front++;
    return value;
  }

  // add size
}
