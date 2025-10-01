let arr = [10, 20, 30];

// Q: Add 40 at the end using push.
arr.push(40);
console.log(arr); // [10,20,30,40]

// Q: Remove the last element using pop.
arr.pop();
console.log(arr); // [10,20,30]

// Q: Add 5 at the beginning using unshift.
arr.unshift(5);
console.log(arr); // [5,10,20,30]

// Q: Remove the first element using shift.
arr.shift();
console.log(arr); // [10,20,30]

// Q: Insert 99 at index 1 using splice.
arr.splice(1,0,99);
console.log(arr); // [10,99,20,30]

// Q: Copy a part of the array from index 1 to 3 using slice.
let newArr = arr.slice(1,3);
console.log(newArr); // [99,20]
