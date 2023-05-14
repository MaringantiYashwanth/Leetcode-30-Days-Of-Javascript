function createAdder(a) {
  function f(b) {
    const sum = a + b;
    return sum;
  }
  return f;
}

const f = createAdder(3);
console.log(f(4));

// arrow functions
const f2 = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log(f2(3, 4));
