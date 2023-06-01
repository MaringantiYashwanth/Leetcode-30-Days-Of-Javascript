function createFunction() {
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
  return f;
}

const f = createFunction();
console.log(f(3, 4)); // 7

// demo
var f1 = function (a, b) {
  const sum = a + b;
  return sum;
};

console.log(f1(3, 4)); // 7

// good practice wrapping a function in a variable clearly shows function returns a
// value to result
const result = (function (a, b) {
  const sum = a + b;
  return sum;
})(3, 4);

console.log(result);

// omit return
const f2 = (a, b) => a + b;
console.log(f2(3, 4)); // 7

function f3(...args) {
  const sum = args[0] + args[1];
  return sum;
}
console.log(f3(3, 4)); // 7

// higher order functions
function log(inputFunction) {
  return function (...args) {
    console.log("Input", args);
    const result = inputFunction(...args);
    console.log("Output", result);
    return result;
  };
}

const f4 = log((a, b) => a + b);
console.log(f4(10, 20));
const f5 = log((a, b) => a * b);
console.log(f5(10, 100));
