// Looping in JavaScript

// Looping allows us to execute a block of code repeatedly as long as a specified condition is true.
// There are several types of loops in JavaScript: for, while, do-while, and forEach.

// Difference between loops:
// - for loop is used when the number of iterations is known.
// - while loop is used when the number of iterations is not known and depends on a condition.
// - do-while loop is similar to while but guarantees at least one execution of the loop body.
// - forEach is used to iterate over arrays and objects, executing a callback function for each element.

// for loop 

// for (initialization; condition; increment/decrement) {
//     statement
// }

// Example of for loop

// var sum = 0;
// for (var i = 0; i <= 10; i++) {
//     sum+=i;
// }
// console.log(sum);

// while loop

// initialization
// while (condition) {
//     statement
//     increment/decrement
// }

// var j = 0;
// while(j <= 10) {
//     console.log(j);
//     j++;
// }

// do-while loop

// initialization
// do {
//     statement
//     increment/decrement
// } while (condition);


// var k = 0;
// do {
//     console.log(k);
//     k++;
// } while (k > 10);

// forEach loop

// Example of forEach loop
// var numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//     console.log(number);
// });

// Synatax for forEach loop

// array.forEach(function(currentValue, index, array) {
//     // statement
// });