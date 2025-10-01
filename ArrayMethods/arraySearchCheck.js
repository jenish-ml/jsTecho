let numbers = [2,5,7,5,10,15];

// Q: Find the index of first 5.
console.log(numbers.indexOf(5)); // 1

// Q: Find the index of last 5.
console.log(numbers.lastIndexOf(5)); // 3

// Q: Check if 10 exists in the array.
console.log(numbers.includes(10)); // true

// Q: Find the first number > 6.
console.log(numbers.find(x=>x>6)); // 7

// Q: Find index of the first number > 6.
console.log(numbers.findIndex(x=>x>6)); // 2
