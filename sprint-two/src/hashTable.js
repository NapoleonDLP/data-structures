var HashTable = function() {
  this._limit = 8;
  // creates the array/hastable
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  bucket.push([k, v]);
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  return bucket.reduce((value, touple) => {
    if (touple[0] === k) {
      value = touple[1];
    }
    return value;
  }, undefined);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  bucket = bucket.filter( touple => touple[0] !== k);
  this._storage.set(index, bucket);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


