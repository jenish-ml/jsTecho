// Local variable example in JavaScript

globalvar = "I am a global variable";
function showLocalVar() {
    var localVar = "I am a local variable";
    console.log(localVar); // Accessible here
    console.log(globalvar); // Accessible here
}

// console.log(localvar); 
showLocalVar(); // Output: I am a local variable

console.log(typeof localVar); // Output: undefined (not accessible here)

// Function scope means that variables declared inside a function are only accessible within that function.
