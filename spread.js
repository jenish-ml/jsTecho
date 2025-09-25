// What is the Spread Operator?

// It expands (spreads) elements of an iterable (like array, string, object) into individual elements.

let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2); 

let a = [1, 2];
let b = [3, 4];
let merged = [...a, ...b];
console.log(merged); 

// Passing Array as Arguments
function sum(...a) {
  return a;
}
console.log(sum(10, 20, 30, 40, 50)); 


// What’s the difference between Spread and Rest operators?

// Both use the same syntax ..., but Spread is used to unpack or expand elements (e.g., copying arrays, merging objects, passing arguments), while Rest is used to collect multiple elements into a single array or object (e.g., handling variable function arguments, array/object destructuring). In short: Spread expands, Rest collects.