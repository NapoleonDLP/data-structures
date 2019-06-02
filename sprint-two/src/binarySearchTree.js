var BinarySearchTree = function(value) {
  //instantiate obj (prototypal)
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

BinarySearchTree.prototype.insert = function(inputValue) {
  var direction = inputValue < this.value ? 'left' : 'right';
  if (this[direction] === null) {
    this[direction] = BinarySearchTree(inputValue);
    return;
  }
  this[direction].insert(inputValue);
};


//add contains

//add depthfirstlog

/*
 * Complexity: What is the time complexity of the above functions?
 */


/*
  var myTree = BinarySearchTree(25);
  myTree.insert(5);


  var tree = {
  value: 8
    left : {
      value: 3,
      left : {
        value 1
      }
      right
    }
    right:
  }
 */