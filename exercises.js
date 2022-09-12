// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------
function myFunction(str, i) {
  let myArr = str.repeat(i);

  console.log(myArr);
}
// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------
function reverseArr(array) {
  let array = [1, 2, 3];
  let newArray = array.slice().reverse();
  console.log(newArray);
}
// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------
function removeFalsy(arr) {
  let arr = [2, 6, undefined, NaN, 8, 10];
  let filtered = arr.filter(Boolean);
  console.log(filtered);
}
// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------
const myArray = [
  ["name", "Charlie"],
  ["color", "brown"],
  ["age", 10],
];

let myObj = myArray.reduce(function (object, ele) {
  object[ele[0]] = ele[1];
  return object;
}, {});

console.log(myObj);

// (arrs) => {
//     const obj = {

//     };

//     for(let i = 0 ; i < arrs.length; i++) {
//         obj[arrs[i][0]] = arrs[i][1];
//     }
// }

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------
function removeDuplicates(chars) {
  let chars = [1, 2, 3, 4, 5, 4, 3];
  let uniqueChars = [...new Set(chars)];
  console.log(uniqueChars);
}
// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------
function areIdentical(arr1, arr2) {
  let firstArr = arr1.length;
  let scndArr = arr2.length;
  if (firstArr != scndArr) {
    return false;
  }

  arr1.sort();
  arr2.sort();

  for (let i = 0; i < firstArr; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    } else {
      return true;
    }
  }
}
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------

// -----------------------------------------------
