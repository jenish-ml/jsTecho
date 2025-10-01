// var: function-scoped, can be redeclared & updated, hoisted (initialized as undefined)
var a = 10;
var a = 20; // redeclaration allowed
a = 30;     // update allowed

// let: block-scoped, cannot be redeclared in same scope, can be updated, not hoisted
let b = 40;
// let b = 50; // Error: redeclaration not allowed
b = 60;      // update allowed

// const: block-scoped, cannot be redeclared or updated, must be initialized
const c = 70;
// const c = 80; // Error: redeclaration not allowed
// c = 90;      // Error: update not allowed

// Example of block scope
{
    let d = 100;
    var e = 200;
}
// console.log(d); // Error: d is not defined (block-scoped)
// console.log(e); // 200 (function/global-scoped)

// Hoisting example
console.log(f); // undefined (var is hoisted)
var f = 300;

// console.log(g); // Error: Cannot access 'g' before initialization
let g = 400;// 400 (after initialization)