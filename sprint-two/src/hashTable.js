

var HashTable = function() {
  this._limit = 8;
  // creates the array/hastable
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var bucket = [];
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage[index])) {
    bucket = this._storage[index];
  }
  bucket.push([k, v]);
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get and store value at index
  var bucket = this._storage.get(index) || [];
  //iterate through bucket
  return bucket.reduce((value, touple) => {
    if (touple[0] === k) {
      value = touple[1];
    }
    return value;
  }, undefined);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get and store value at index
  //iterate through bucket
  // checking for key
  // filter through bucket
  // set index to filtered bucket
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


