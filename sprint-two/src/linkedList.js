var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {  // O(1) Constant
    // instantiate new Node
    var newNode = Node(value);
    // if head & tail are null:
    if (this.head === null && this.tail === null) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      // instantiate new Node(value) on this.tail.next
      this.tail.next = newNode;
      // set the this.tail to new Node
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {  // O(1) Constant
    // store head's value
    var value = this.head.value;
    // head will point to head.next
    this.head = this.head.next;
    // return value
    return value;
  };

  list.contains = function(target) {  // O(n) Linear
    //track current node
    var currentNode = this.head;
    // while next !== null
    while (currentNode.value === target || currentNode.next !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
