// const fish = (x: number): number => x + 2;
// const garfield = (x: number): number => x * 3;
// console.log(fish);
// console.log(garfield);
// const composingFish = (x: number): number => fish(garfield(x));

// f(g(x)) = f(3x) = 3x + 2
type F = (x: number) => number;
const compose = function (functions: F[]): F {
  return function (x: number): number {
    if (functions.length === 0) {
      // Identity function
      return x; // f(x) = x
    }
    let input = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      const currFunc = functions[i];
      input = currFunc(input);
      console.log(typeof currFunc);
    }
    return input;
  };
};

let x = 10;
const F = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(F(10));
