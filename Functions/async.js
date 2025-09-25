// async function myFunction() {
//   return "Hello!";
//  }
// myFunction().then(result => console.log(result)); 

function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data received"), 100000);
  });
 }
 async function fetchData() {
  console.log("Fetching...");
  let result = await getData(); // waits until resolved
  console.log(result);
 }
 fetchData();