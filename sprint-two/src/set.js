var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // add item to set
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  //check if item is found in set
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  //delete item from set
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
