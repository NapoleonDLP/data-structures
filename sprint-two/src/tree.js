var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var node = this;
  // declare found
  var found = false;
  // declare helper function (node)
  var findTarget = function(node) {

    if (node.value === target) {
      found = true;
      return;
    }
    //iterate through children
    node.children.forEach( child => {
      findTarget(child);
    });
  };

  findTarget(node);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
