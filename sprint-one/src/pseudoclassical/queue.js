var Queue = function() {
// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

  this.storage = {};
  this.front = 0;
  this.back = 0;
};

// add enqueue
Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};

//add dequeue
Queue.prototype.dequeue = function() {
  var value = this.storage[this.front];
  delete this.storage[this.front];
  this.back > this.front && this.front++;
  return value;
};

//add size
Queue.prototype.size = function() {
  return this.back - this.front;
};
//back - front

