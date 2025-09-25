function outerFunction(){
    let x = 10;
    function innerFunction(){
        console.log(x);
    }
    innerFunction();   
}

outerFunction();

// Closure: A closure is a function that has access to the variables and functions of its parent scope, even after the parent scope has finished executing.

// Advantages of Closure:

// 1. Encapsulation: Closures provide a way to encapsulate data and behavior within a single unit, making it easier to manage and reuse code.
// 2. Private Variables: Closures allow you to create private variables that cannot be accessed from outside the closure.
// 3. Modular Code: Closures can be used to create modular code by grouping related functions together.
// 4. Data Protection: Closures can be used to protect data from unauthorized access.


