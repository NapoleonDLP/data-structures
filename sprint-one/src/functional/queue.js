var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.Storage = {};

  // Add two properties, front & back
  someInstance.front = 0;
  someInstance.back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add value to storage at back of queue

    // increment back
  };

  someInstance.dequeue = function() {
    // store current value
    // delete storage[front]
    // increment front
    // return stored value
  };

  someInstance.size = function() {
    //return back - front
  };

  return someInstance;
};
