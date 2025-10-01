let obj3 = { a: 1, b: 2 };

// Q: Freeze object (cannot add/update/delete)
Object.freeze(obj3);
obj3.a = 10; // Won't update
obj3.c = 3; // Won't add
console.log(obj3); // {a:1, b:2}

// Q: Seal object (can update, cannot add/delete)
let obj4 = { x: 10, y: 20 };
Object.seal(obj4);
obj4.x = 100; // Works
obj4.z = 30; // Won't add
console.log(obj4); // {x:100, y:20}