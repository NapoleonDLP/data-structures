var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  //add variable for storage track of count
  someInstance.count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    //add to storage obj using count:value
    someInstance.storage[someInstance.count] = value;
    //  increment count
    someInstance.count++;
    /*
I : string
O : no output just side effect
C : n/a
E : n/a
*/
  };

  someInstance.pop = function() {
    //  Remove and return the string on the top of the stack
    /*
    I : N/A
    O : string from top of stack
    C : n/a
    E : n/a
    */
    var index = someInstance.count - 1;
    //  store value in variable
    var value = someInstance.storage[index];
    //  delete key:value from storage
    delete someInstance.storage[index];
    //  decrement count
    someInstance.count > 0 && someInstance.count--;
    //  return value at the current count in storage
    return value;
  };

  someInstance.size = function() {
    //return count
    return someInstance.count;
  };
  //  add storage as a property of someInstance before returning

  return someInstance;
};

/*
I
O
C
E
*/