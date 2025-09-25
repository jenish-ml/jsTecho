var a = ["Aleena","Julie",10,10.5,true,"Hello", "World"];

// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])
// console.log(a[5][0])
// console.log(a[5][1])

var filtered = a.filter((item) => typeof item === "string");
console.log(filtered);
