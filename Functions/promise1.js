//Creating a Promise
let myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully! ");
    } else {
      reject("Promise rejected ");
    }
  }, 2000);
});

myPromise
  .then(result => console.log(result))      // Runs if promise is resolved
  .catch(error => console.log(error))       // Runs if promise is rejected
  .finally(() => console.log("Promise execution finished! "))