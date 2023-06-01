const f = (x) => x + 2;
const g = (x) => x * 3;
console.log(f);
console.log(g);
const composeFunc = (x) => f(g(x)); // f(g(x)) = f(3x) = 3x + 2;
