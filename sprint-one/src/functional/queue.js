var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // Add two properties, front & back
  someInstance.front = 0;
  someInstance.back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add value to storage at back of queue
    someInstance.storage[someInstance.back] = value;
    // increment back
    someInstance.back++;
  };

  someInstance.dequeue = function() {
    // store current value
    var value = someInstance.storage[someInstance.front];
    // delete storage[front]
    delete someInstance.storage[someInstance.front];
    // increment front
    someInstance.back > someInstance.front && someInstance.front++;
    // return stored value
    return value;
  };

  someInstance.size = function() {
    //return back - front
    return someInstance.back - someInstance.front;
  };

  return someInstance;
};
