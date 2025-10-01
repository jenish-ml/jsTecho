// Iteration / Transformation

let arr2 = [1,2,3,4,5];

// Q: Print each value using forEach.
arr2.forEach(x=>console.log(x)); // 1 2 3 4 5

// Q: Create a new array of squares using map.
let squares = arr2.map(x=>x*x);
console.log(squares); // [1,4,9,16,25]

// Q: Filter only even numbers.
let evens = arr2.filter(x=>x%2===0);
console.log(evens); // [2,4]

// Q: Sum all numbers using reduce.
let sum = arr2.reduce((a,b)=>a+b,0);
console.log(sum); // 15

// Q: Using reduceRight on ["a","b","c"] to get "cba".
let reversed = ["a","b","c"].reduceRight((acc,cur)=>acc+cur,"");
console.log(reversed); // "cba"
