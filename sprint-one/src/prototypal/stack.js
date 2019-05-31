var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create someInstance object (using Object.create)

  var someInstance = Object.create(stackMethods);
  // declare storage
  someInstance.storage = {};
  // declare count
  someInstance.count = 0;
  // return someInstance
  return someInstance;
};

// Stack.stackMethods = {};
var stackMethods = {};

//add push to stackMethods
stackMethods.push = function(value) {
  //create record at count -1
  this.storage[this.count] = value;
  //increment count
  this.count++;
};

//add pop to stackMethods
stackMethods.pop = function() {
  //store value
  var value = this.storage[this.count - 1];
  //delete record at count -1
  delete this.storage[this.count - 1];
  //decrement count ensure > 0
  this.count > 0 && this.count--;
  //return stored value
  return value;
};

//add size to stackMethods
stackMethods.size = function() {
  return this.count;
};
