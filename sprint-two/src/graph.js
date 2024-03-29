

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { // O(1) Constant
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { //O(n) Linear
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { //O(n2) Quadratic
  // iterate over each edge
  this.storage[node].forEach(neighbor => {
    this.storage[neighbor] = this.storage[neighbor].filter(x => x !== node);
  });
  // go to that edge
  // find index of nodeToDelete
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { //O(n) Linear
  // return fromNode contains value && toNode contains value
  return this.storage[fromNode].includes(toNode) && this.storage[toNode].includes(fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // O(1) Constant
  this.storage[fromNode].push(parseInt(toNode));
  this.storage[toNode].push(parseInt(fromNode));
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { //O(n) Linear
  this.storage[fromNode] = this.storage[fromNode].filter( x => x !== toNode);
  this.storage[toNode] = this.storage[toNode].filter( x => x !== fromNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { //O(n) Linear
  Object.keys(this.storage).forEach(node => {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// storage = {
//   node1: [node2, node5]
//   node2: [node1,]
//   ...
//   node5: [node1,]
// }
