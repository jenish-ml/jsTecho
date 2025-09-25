
var numbers = [1, 2, 3, 4, 5];
a = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}); // Output: 15 array to a single value.

console.log(a); // Output: 15