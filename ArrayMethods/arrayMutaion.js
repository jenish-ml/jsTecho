// JavaScript Array Methods Examples

// ================= Mutating Methods =================

// push() - add at end
let a1 = [1, 2];
a1.push(3);
console.log(a1); // [1, 2, 3]

// pop() - remove last
let a2 = [1, 2, 3];
a2.pop();
console.log(a2); // [1, 2]

// shift() - remove first
let a3 = [1, 2, 3];
a3.shift();
console.log(a3); // [2, 3]

// unshift() - add at start
let a4 = [2, 3];
a4.unshift(1);
console.log(a4); // [1, 2, 3]

// splice() - add/remove anywhere
let a5 = [1, 3, 4];
a5.splice(1,0,2);
console.log(a5); // [1, 2, 3, 4]

// sort() - sort in place
let a6 = [3, 1, 2];
a6.sort();
console.log(a6); // [1, 2, 3]

// reverse() - reverse in place
let a7 = [1, 2, 3];
a7.reverse();
console.log(a7); // [3, 2, 1]

// fill() - fill part/all
let a8 = [1, 2, 3, 4];
a8.fill(0,1,3);
console.log(a8); // [1,0,0,4]

// copyWithin() - copy inside array
let a9 = [1,2,3,4,5];
a9.copyWithin(0,3);
console.log(a9); // [4,5,3,4,5]


// ================= Non-Mutating Methods =================

// slice() - extract part
let b1 = [1,2,3,4];
let s1 = b1.slice(1,3);
console.log(s1); // [2,3]
console.log(b1); // [1,2,3,4]

// concat() - merge arrays
let b2 = [1,2];
let b3 = [3,4];
let c = b2.concat(b3);
console.log(c); // [1,2,3,4]
console.log(b2); // [1,2]

// map() - transform
let b4 = [1,2,3];
let m1 = b4.map(x=>x*2);
console.log(m1); // [2,4,6]
console.log(b4); // [1,2,3]

// filter() - select
let b5 = [1,2,3,4];
let f1 = b5.filter(x=>x%2===0);
console.log(f1); // [2,4]
console.log(b5); // [1,2,3,4]

// reduce() - combine to single value
let b6 = [1,2,3];
let sum = b6.reduce((acc,x)=>acc+x,0);
console.log(sum); // 6
console.log(b6); // [1,2,3]

// flat() - flatten nested array
let b7 = [1,[2,3],[4,5]];
let flatArr = b7.flat();
console.log(flatArr); // [1,2,3,4,5]

// flatMap() - map + flatten
let b8 = [1,2,3];
let fm = b8.flatMap(x => [x,x*2]);
console.log(fm); // [1,2,2,4,3,6]

// join() - array to string
let b9 = [1,2,3];
let j1 = b9.join('-');
console.log(j1); // "1-2-3"
console.log(b9); // [1,2,3]