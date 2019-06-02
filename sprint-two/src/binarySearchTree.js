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
BinarySearchTree.prototype.contains = function(searchValue) {
  if (this.value === searchValue) {
    return true;
  }

  var direction = searchValue < this.value ? 'left' : 'right';

  if (this[direction] === null) {
    return false;
  } else {
    return this[direction].contains(searchValue);
  }
};

//add depthfirstlog
BinarySearchTree.prototype.depthFirstLog = function(cb) {

  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }

};

BinarySearchTree.prototype.ascendingLog = function(cb) {
  if (this.left) {
    this.left.depthFirstLog(cb);
  } else {
    cb(this.value);
  }
  //return

  //apply cb to this value

  //if there right
  //cb right
};
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