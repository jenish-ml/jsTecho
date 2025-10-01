// Q: Concatenate two arrays.
let colors1 = ['red','green'];
let colors2 = ['blue','yellow'];
let merged = colors1.concat(colors2);
console.log(merged); // ['red','green','blue','yellow']

// Q: Join an array into a string separated by '-'.
let tech = ['html','css','js'];
console.log(tech.join('-')); // "html-css-js"

// Q: Convert a string into an array.
let str = "pen,pencil,eraser";
let items = str.split(",");
console.log(items); // ['pen','pencil','eraser']
