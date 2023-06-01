function createFunction() {
  return f; // Function hoisting we can return function without creating it before.
  function f(a, b) { // you can only do it if you declare functions with function syntax.
    const sum = a + b;
    return sum;
  }
}

const f = createFunction();
console.log(f(3, 4));
