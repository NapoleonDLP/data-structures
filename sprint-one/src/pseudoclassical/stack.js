var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // declare this.count
  this.count = 0;
  // declare this.storage
  this.storage = {};
};

// add push to Stack.prototype
Stack.prototype.push = function(value) {
  // index = this.count
  this.storage[this.count] = value;
  this.count++;
};

// add pop to Stack.prototype
Stack.prototype.pop = function() {
  var value = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  this.count > 0 && this.count--;
  return value;
};


// add size to Stack.prototype


