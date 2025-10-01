// ===============================
// 3. Object Iteration
// ===============================

// Q: Iterate using for...in loop
for (let key in obj) {
    console.log(key, obj[key]);
}
// Output:
// name Jenish
// city Surat
// country India

// Q: Iterate using Object.entries().forEach()
Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value);
});