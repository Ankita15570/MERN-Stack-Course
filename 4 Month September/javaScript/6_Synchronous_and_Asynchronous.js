// Synchronous

// I will execute line by line code

console.log("Start");
console.log("Process");
console.log("End");

// Output:
// Start
// Process
// End

// Asynchronous

// I will not execute line by line code
// I will execute the code after some time

console.log("Start");
setTimeout(() => {
  console.log("Process");
}, 2000);
console.log("End");

// Output:
// Start
// End
// Process (after 2 seconds)
