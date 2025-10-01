// Q: Flatten this array one level.
let nested = [1,[2,3],[4,[5]]];
console.log(nested.flat()); // [1,2,3,4,[5]]

// Q: Use flatMap to multiply each number in [1,2,3] by 2.
console.log([1,2,3].flatMap(x=>[x*2])); // [2,4,6]

// Q: Check if all numbers in [1,2,3] are positive using every.
console.log([1,2,3].every(x=>x>0)); // true

// Q: Check if any number in [4,9,16] is > 10 using some.
console.log([4,9,16].some(x=>x>10)); // true

// Q: Fill a new array of length 5 with '0'.
let filled = new Array(5).fill(0);
console.log(filled); // [0,0,0,0,0]

// Q: Copy first two items to last two positions in [10,20,30,40] using copyWithin.
let a = [10,20,30,40];
a.copyWithin(2,0,2);
console.log(a); // [10,20,10,20]

// Q: Check if {} is an array.
console.log(Array.isArray({})); // false
console.log(Array.isArray([1,2,3])); // true

// Q: Convert 'HELLO' into an array of characters.
console.log(Array.from("HELLO")); // ['H','E','L','L','O']
console.log([... "HELLO"]); // ['H','E','L','L','O']
