// Assign to a Variable
let greet = function () {
  console.log("Hello!");
};
greet(); // Output: Hello!


// Pass as a Callback
setTimeout(function() {
  console.log("Executed after 1 second");
}, 1000);

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("Runs instantly");
})();

// With Array Methods
let numbers = [1, 2, 3];
numbers.forEach(function(num) {
  console.log(num * 2);
});
