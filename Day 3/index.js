// Closure in Javascript
/*
In javascript functions will have the reference of all the variables.
In javascript functions have a reference to all variables in the same scope 
as well as any outer scope. These scopes are known as lexical environment.
Javascript function + lexical environment combination is known as closure.
*/

function createAdder(a) {
  return function add(b) {
    const sum = a + b;
    return sum;
  };
}

const addTo2 = createAdder(2);
console.log(addTo2(5));

const alice = new Proxy(
  { name: "Alice", age: 25 },
  {
    get: (target, key) => {
      if (key == "greet") {
        return () => console.log("My name is", target.name);
      } else {
        return target[key];
      }
    },
  }
);

alice.greet();

// Method 1
// Declare a variable currentCount and set it equal to init
// return an object with three functions where we increment,
// decrement and reset the currentCount.
var createCount = function (init) {
  let createCount = init;
  return {
    increment: function () {
      currentCount += 1;
      return currentCount;
    },

    decrement: function () {
      currentCount -= 1;
      return currentCount;
    },

    reset: function () {
      currentCount = init;
      return currentCount;
    },
  };
};
