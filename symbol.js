var a = Symbol.for("a");
var b = Symbol.for("a");
console.log(a === b); // false, different symbols

console.log(a); // "Symbol(a)"
console.log(b); // "Symbol(b)"

console.log(typeof a); 