// ===============================
// 1. Property Access & Manipulation
// ===============================
let obj = {
    name: "Jenish",
    age: 25,
    city: "Ahmedabad"
};

// Q: Access property 'name' using dot notation
console.log(obj.name); // "Jenish"

// Q: Access property 'age' using bracket notation
console.log(obj["age"]); // 25

// Q: Add a new property 'country'
obj.country = "India";
console.log(obj); // {name: "Jenish", age: 25, city: "Ahmedabad", country: "India"}

// Q: Update the property 'city'
obj.city = "Surat";
console.log(obj); // {name: "Jenish", age: 25, city: "Surat", country: "India"}

// Q: Delete the property 'age'
delete obj.age;
console.log(obj); // {name: "Jenish", city: "Surat", country: "India"}

// Q: Check if property 'name' exists
console.log("name" in obj); // true
console.log(obj.hasOwnProperty("age")); // false