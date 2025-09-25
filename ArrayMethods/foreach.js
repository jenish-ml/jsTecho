// foreach note

// This file is used to iterate over an array or object and execute a callback function for each element.

numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//     console.log(number);
// });


numbers.forEach((num, i, arr) => {
  arr[i] = num * 2;
});

console.log(numbers);


// foreach is a method that executes a provided function once for each array element.

// foreach using arrow function
// numbers.forEach(number => console.log(number/2));

// forEach can also be used with objects, but it requires converting the object into an array first.
Object.entries({a: 1, b: 2}).forEach(function([key, value]) {
    console.log(key, value);
});

// Foreach vs Map

let nums = [1, 2, 3];

// forEach (does not return)
let doubled1 = nums.forEach(n => n * 2);
console.log(doubled1); // undefined

// map (returns new array)
let doubled2 = nums.map(n => n * 2);
console.log(doubled2); // [2, 4, 6]

// forEach is used for executing a function on each element of an array without returning a new array.
// map is used for transforming each element of an array and returning a new array with the transformed elements.