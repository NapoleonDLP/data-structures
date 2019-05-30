var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //declare var someinstance set to {}
  var someInstance = {};
  //declare storage property in someinstance set to{}
  someInstance.storage = {};
  //declare var set to size of stack
  someInstance.count = 0;
  //extend instance with stackmethods
  _.extend(someInstance, stackMethods);
  //return instance
  return someInstance;
};

var stackMethods = {};

// Add push to stackMethods
stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};
// Add pop to stackMethods
stackMethods.pop = function() {
  var value = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  this.count > 0 && this.count--;
  return value;
};
// Add size to stackMethods
stackMethods.size = function() {
  return this.count;
};
