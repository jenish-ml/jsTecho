// Math Functions

console.log(Math.sqrt(25));   // 5
console.log(Math.pow(2, 3));  // 8
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10
console.log(Math.random()*100); 
console.log(Math.floor(10.25)); 
console.log(Math.ceil(-10.25)); 
console.log(Math.round(10.55)); 
console.log(Math.trunc(10.55)); 
console.log(Math.abs(-10)); 
console.log(Math.sign(-90)); 
console.log(Math.cbrt(27)); 
console.log(Math.hypot(3, 4));
console.log(Math.log(10));
console.log(Math.log2(10));
console.log(Math.log10(10));
console.log(Math.exp(2));
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);

// String Functions

let str = "Hello World";
console.log(str.toUpperCase());  // "HELLO WORLD"
console.log(str.toLowerCase());  // "hello world"
console.log(str.length);         // 11
console.log(str.includes("Hello")); // true

// Array Functions

let arr = [1, 2, 3, 4];
console.log(arr.push(5));   // adds element → [1,2,3,4,5]
console.log(arr.pop());     // removes last → [1,2,3,4]
console.log(arr.join("-")); // "1-2-3-4"
console.log(arr.includes(3)); // true

// Date Functions

let date = new Date();
console.log(date);
console.log(date.getFullYear()); // current year
console.log(date.getMonth());   // month (0-11)
console.log(date.getDate());     // day of month
console.log(date.getDay());     // day of week (0-6)
console.log(date.getHours());    // hours
console.log(date.getMinutes());  // minutes
console.log(date.getSeconds());  // seconds
console.log(date.toISOString()); // ISO string format
console.log(date.toLocaleDateString()); // locale date string
console.log(date.toLocaleTimeString()); // locale time string
console.log(date.toString()); // full date string
console.log(Date.now()); // current timestamp
console.log(Date.parse("2024-01-01")); // timestamp of given date

// Convert timestamp to date object

let a = Date.now();
let dateObj = new Date(a);
console.log(dateObj);