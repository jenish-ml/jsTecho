let obj2 = { profession: "Developer", age: 25 };

// Q: Merge objects using Object.assign
let merged = Object.assign({}, obj, obj2);
console.log(merged); 
// {name:"Jenish", city:"Surat", country:"India", profession:"Developer", age:25}

// Q: Merge using spread operator
let spreadMerged = {...obj, ...obj2};
console.log(spreadMerged);