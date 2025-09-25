// Object Methods in JavaScript

const person = {
  name: "Jenish",
  age: 24,
  city: "Kerala",
};

// 1. Object.keys() → returns array of keys
console.log("Keys:", Object.keys(person));

// 2. Object.values() → returns array of values
console.log("Values:", Object.values(person));

// 3. Object.entries() → returns array of [key, value]
console.log("Entries:", Object.entries(person));

// 4. Object.fromEntries() → convert array back to object
const arr = [["brand", "Ford"], ["model", "Mustang"]];
const car = Object.fromEntries(arr);
console.log("FromEntries:", car);

// 5. Object.assign() → copy properties from one or more objects
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log("Assign:", target);

// 6. Object.freeze() → prevents adding, deleting or changing properties
const frozen = Object.freeze({ lang: "JavaScript" });
frozen.lang = "Python"; // ❌ ignored
console.log("Freeze:", frozen);

// 7. Object.seal() → allows changing values but prevents adding/deleting
const sealed = Object.seal({ id: 101, status: "active" });
sealed.status = "inactive"; // ✅ allowed
sealed.newProp = "not added"; // ❌ ignored
delete sealed.id; // ❌ ignored
console.log("Seal:", sealed);

// 8. Object.create() → create object with prototype
const proto = { greet: function () { return "Hello!"; } };
const user = Object.create(proto);
user.name = "Jenish";
console.log("Create:", user.name, "| Greet:", user.greet());

// 9. Object.hasOwn() (ES2022) → check if property exists
console.log("HasOwn (name):", Object.hasOwn(person, "name"));
console.log("HasOwn (salary):", Object.hasOwn(person, "salary"));

// 10. Object.is() → strict comparison (better than === for some cases)
console.log("Is 5 and 5:", Object.is(5, 5)); // true
console.log("Is +0 and -0:", Object.is(+0, -0)); // false
console.log("Is NaN and NaN:", Object.is(NaN, NaN)); // true

// 11. Object.getOwnPropertyNames() → all property names
console.log("GetOwnPropertyNames:", Object.getOwnPropertyNames(person));

// 12. Object.getPrototypeOf() → get prototype
console.log("GetPrototypeOf:", Object.getPrototypeOf(user));

// 13. Object.setPrototypeOf() → change prototype
const newProto = { sayBye: function () { return "Bye!"; } };
Object.setPrototypeOf(user, newProto);
console.log("SetPrototypeOf:", user.sayBye());

// 14. Object.defineProperty() → add property with control
const obj = {};
Object.defineProperty(obj, "pi", {
  value: 3.14159,
  writable: false, // cannot change
});
console.log("DefineProperty (pi):", obj.pi);

// 15. Object.defineProperties()
Object.defineProperties(obj, {
  e: { value: 2.718, writable: true },
  g: { value: 9.8, writable: false },
});
console.log("DefineProperties:", obj);

// 16. Object.entries() + for..of loop
for (let [key, value] of Object.entries(person)) {
  console.log(`Loop Entry: ${key} = ${value}`);
}
