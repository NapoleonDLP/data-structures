var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // add item to set
};

setPrototype.contains = function(item) {
  //check if item is found in set
};

setPrototype.remove = function(item) {
  //delete item from set
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
