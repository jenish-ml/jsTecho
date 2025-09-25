let student = {
    name: "Jenish",
    age: 24,
    greet: function() {
        console.log(this);
    }
}

student.greet();

// this keyword is used to refer to the current object
// In this case, it refers to the global object or the object that calls the function