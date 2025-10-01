let fruits = ["Apple", "Banana", "Cherry"];

// Print each fruit
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Output:
// Apple
// Banana
// Cherry

// Print each fruit with index
fruits.forEach(function(fruit, i) {
    console.log(`${i}: ${fruit}`);
});

// Output:
// 0: Apple
// 1: Banana
// 2: Cherry

// With arrow function (modern style):
fruits.forEach(fruit => console.log(fruit));