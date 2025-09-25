// function one(){
//     var a = 100;
//     two(a);
//     console.log('one', a);
// }

// function two(a){
//     a = a + 1
//     console.log('two', a);
// }

// one();

// Integer No Reflected A

function one() {
  var a = { value: 100 };
  two(a);
  console.log("one", a.value);
}

function two(a) {
  a.value = a.value + 1;
  console.log("two", a.value);
}

one();

// Object Reflected

// call by value
// When you pass a primitive data type (number, string, boolean, etc.) to a function, JavaScript copies the value.
// Changes inside the function do not affect the original variable.

// Call by Reference

// When you pass an object, array, or function to another function, JavaScript passes a reference (memory address), not a copy.
// Changes made inside the function will affect the original object.
