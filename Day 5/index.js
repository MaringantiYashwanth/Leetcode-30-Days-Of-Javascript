// false
// 0, -0, BigInt(0)
// NaN
// ""
// null
// undefined
// truthy.

if (userInput !== null && userInput !== "") {
  // uploadToDatabase(userInput);
}
// both if statements are same
if (userInput) {
}

const stringVal = textInput || "Default Value";
// why is logical operator returning a string

let val;
if (a) {
  val = a;
} else if (b) {
  val = b;
} else {
  val = c;
}

const val1 = a || b || c;
if (a && b) {
  func();
}

a && b && func();

// Approach 1: Push Values onto New Array
var filter = (arr, fn) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr.push(i);
    }
  }
  return newArr;
};

// Approach 2 Filtering Elements using for Each loop
var filter = function (arr, fn) {
  const newArr = [];
  for (const stringIndex in arr) {
    const i = Number(stringIndex);
    if (fn(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// Approach 3: Preallocate Memory
var filter = function (arr, fn) {
  let size = 0;
  const newArr = new Array(arr.length);
  for (let i = 0; i < arr.length; ++i) {
    if (fn(arr[i], i)) {
      newArr[size] = arr[i];
      size++;
    }
  }
  // Ensure new array is of length size
  while (newArr.length > size) {
    newArr.pop();
  }
  return newArr;
};

// Approach 4: Perform Operations In-Place
var filter = function (arr, fn) {
  let size = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (fn(arr[i], i)) {
      arr[size] = arr[i];
      size++;
    }
  }
  // Ensure array is of length size
  while (arr.length > size) {
    arr.pop();
  }
  return arr;
};

// Approach 5: Standard Library
var filter = function (arr, fn) {
  return arr.filter(fn);
};
