var mp1 = (arr, fn) => {
  var newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = fn(arr[i], i);
  }
  return newArray;
};

var arr = [1, 2, 3, 4, 5];

var callbackFunction1 = (element, index) => {
  return element * 2;
};

var result = mp1(arr, callbackFunction1);
console.log(result);

var arr2 = ["apple", "banana", "mango"];
var callbackFunction2 = (element, index) => {
  return element.toUpperCase();
};

var result2 = mp1(arr2, callbackFunction2);
console.log(result2);

var arr3 = [1, 2, 3, 4, 5];
var callbackFn = (element, index) => {
  if (index % 2 == 0) {
    return element * 2;
  } else {
    return element * 3;
  }
};

var result = mp1(arr3, callbackFn);
console.log(result);
