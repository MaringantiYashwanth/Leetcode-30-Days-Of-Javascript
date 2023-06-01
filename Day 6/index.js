const nums = [1, 2, 3];
const sum = nums.reduce((accumulator, val) => accumulator + val, 0);
console.log(sum); // 6
// val is the value accumulator is initialized as

const nums1 = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum2 = nums1.reduce((accumulator, val) => accumulator + val.x, 0);
console.log(sum2);
// approach 1
var reduced = function (nums, fn, init) {
  let accumulator = init; // accumulator is a variable that is initialized to init
  // reduce merges the code in accumulator and returns the accumulator.
  for (const element of nums) {
    accumulator = fn(accumulator, element);
  }
  return accumulator;
};

// Example 1: Summing an array of numbers
const nums2 = [1, 2, 3, 4, 5];
const res = reduced(nums2, (accumulator, element) => accumulator + element, 0);
console.log(res); // Output 15

// Example 2: Concatenating strings in an array
const words = ["Hello", "World", "!"];
const sentence = reduced(
  words,
  (accumulator, element) => accumulator + element,
  ""
);

console.log(sentence); // Output: Hello World

// Example 3: Finding maximum in an array
const values = [42, 19, 6, 33, 8];
const max = reduced(values, (accumulator, element) => {
  Math.max(accumulator, element), -Infinity;
});
console.log(max);
// approach 2:
// using forEach loop
var reducedForEach = (reduceArr, fn, init) => {
  let accumulator = init;
  reduceArr.forEach((element) => {
    accumulator = fn(accumulator, element);
  });
  return accumulator;
};

const groceries = [
  { id: 173, name: "Soup" },
  { id: 964, name: "Apple" },
  { id: 535, name: "Cheese" },
];

const indexedGroceries = groceries.reduce((accumulator, val) => {
  accumulator[val.id] = val;
  return accumulator;
}, {});

console.log(indexedGroceries);
/**
 * {
 *   "173": { id: 173, name: "Soup" },
 *   "964": { id: 964, name: "Apple" },
 *   "535": { id: 535, name: "Cheese" },
 * }
 */
/** With filter and map */
var names = groceries.filter((item) => item.id > 500).map((item) => item.name);

/* With reduce */
var names1 = groceries.reduce((accumulator, val) => {
  if (val.id > 500) {
    accumulator.push(val.name);
  }
  return accumulator;
}, []);

console.log(names1);

var reducedFun = function (arr, fn, initialVal) {
  let accumulator = initialVal;
  for (const index in accumulator) {
    accumulator.push(fn(accumulator, arr[index]));
  }
  return accumulator;
};

console.log(reducedFun);
