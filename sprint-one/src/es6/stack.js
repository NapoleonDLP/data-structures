class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  // add push method
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // add pop

  // add size
}