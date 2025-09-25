function greet(name, callback) {
    console.log("Hello, " + name);
    callback("tom");
}
function sayBye(abc) {
    console.log("Goodbye! " + abc);
}
greet("Alice", sayBye);