// Q: Define property with descriptor
let obj5 = {};
Object.defineProperty(obj5, "name", {
    value: "Jenish",
    writable: false,
    enumerable: true,
    configurable: false
});
console.log(obj5.name); // "Jenish"

// Q: Get property descriptor
console.log(Object.getOwnPropertyDescriptor(obj5, "name"));

// Q: Get all property descriptors
console.log(Object.getOwnPropertyDescriptors(obj5));