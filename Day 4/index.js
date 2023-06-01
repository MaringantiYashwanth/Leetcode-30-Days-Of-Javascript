// Apply Transforms over each element in an array
// this question is intended as an introduction to callbacks
// a callback is defined as a function passed as an argument to another function
var mp1 = function (arr, fn) {
  var newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = fn(arr[i], i);
  }
  return newArray;
};

let appendArray = mp1([1, 2, 3, 4, 5], fn);
console.log(appendArray);
// // Approach 1
// var arr = [];
// console.log(
//   Array.map([1, 2, 3], function plusone(n) {
//     return n + 1;
//   })
// );
// console.log(
//   arr.map([1, 2, 3], function plusI(n, i) {
//     return n + i;
//   })
// );
// console.log(
//   arr.map([10, 20, 30], function constant() {
//     return 42;
//   })
// );

// // Approach 2 For...in loop
// var map = function (arr, fn) {
//   const newArray = new Array(arr.length);
//   for (const i in arr) {
//     newArray[i] = fn(arr[i], Number[i]);
//   }
//   return newArray;
// };

// // Approach 3: Push values onto Array
// var map = function (arr, fn) {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(fn(arr[i], i));
//   }

//   return newArray;
// };

// // Approach 4: Preallocate Memory
// var map = function (arr, fn) {
//   const newArray = new Array(arr.length);
//   for (let i = 0; i < arr.length; i++) {
//     newArray[i] = fn(arr[i], i);
//   }
//   return newArray;
// };

// // Approach 5: 32 Bit Integer Array also called typed arrays. Search for typed arrays
// var map = function (arr, fn) {
//   const newArray = new Int32Array(arr.length);
//   for (let i = 0; i < arr.length; ++i) {
//     newArray[i] = fn(arr[i], i);
//   }
//   return newArray;
// };

// // Approach 6: In-Memory Transformation
// var map = function (arr, fn) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = fn(arr[i], fn);
//   }
//   return arr;
// };
