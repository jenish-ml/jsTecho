const multiply = ( a , b ) =>  a * b
console.log(multiply( 10,2 ))

// An arrow function in JavaScript is a concise syntax for writing function expressions, introduced in ECMAScript 6 (ES6). It provides a shorter and more readable way to define functions compared to traditional function expressions, especially for simple, single-expression functions.

let obj = {
    name: "aleena",
    age: 20,
    greet: () => {
        console.log(`Hello ${this.name}, you are ${obj.age} years old.`);
    }
}
console.log(typeof obj); // Output: function