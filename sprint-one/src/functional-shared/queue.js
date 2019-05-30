var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create instance {}
  var someInstance = {};
  //declare storage {}
  someInstance.storage = {};
  //declare front of line
  someInstance.front = 0;
  //declare back of line
  someInstance.back = 0;
  //extend instance to include methods
  _.extend(someInstance, queueMethods);
  //return instance
  return someInstance;
};

var queueMethods = {};

// declare enqueue (value)
queueMethods.enqueue = function(value) {
  // add k:v to this.storage (k: back, v: value)
  this.storage[this.back] = value;
  // increment back
  this.back++;
};
// declare dequeue
queueMethods.dequeue = function() {
  // store front value
  var value = this.storage[this.front];
  // remove from value from this.storage
  delete this.storage[this.front];
  // increment front (limiting front)
  this.back > this.front && this.front++;
  // return stored value
  return value;
};

// declare size
queueMethods.size = function() {
  // return this.back - this.front
  return this.back - this.front;
};






