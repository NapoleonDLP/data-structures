var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create someInstance w/ protype queueMethods
  var someInstance = Object.create(queueMethods);
  //add storage to someInstance
  someInstance.storage = {};
  // add front to someInstance
  someInstance.front = 0;
  // add back to someInstance
  someInstance.back = 0;
  // return someInstance
  return someInstance;
};

var queueMethods = {};

// add enqueue to queuemethods
queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};

// add dequeue to queuemethods
queueMethods.dequeue = function() {
  var value = this.storage[this.front];
  delete this.storage[this.front];
  this.front < this.back && this.front++;
  return value;
};

// add size to queuemethods
queueMethods.size = function() {
  return this.back - this.front;
};

