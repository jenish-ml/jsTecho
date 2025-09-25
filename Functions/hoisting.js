// Function Hoisting
// Hoisting is a JavaScript mechanism where variables and functions are moved to the top of their containing scope before code execution.

// Example:
console.log(a); // Output: undefined (variable is hoisted)
var a = 10;


console.log(add(2, 3)); // Output: 5 (function is hoisted)
function add(a, b) {
    return a + b;
}

// Why is Function Hoisting Important?
// Function hoisting allows functions to be called before they are defined, which is useful for code organization and maintainability.

// Hoisting means function declarations are moved to the top of their containing scope before code execution.


