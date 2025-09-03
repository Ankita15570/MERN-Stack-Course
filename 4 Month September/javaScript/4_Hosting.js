myFunction();

// call Function
console.log(a); // undefined

var a = 10;
console.log(a);

function myFunction() {
  try {
    console.log("1 Normal Function Called");
  } catch (error) {
    console.log(error);
  }
}

const callFunction = function () {
  try {
    console.log("2 Arrow Function Called");
  } catch (error) {
    console.log(error);
  }
};
callFunction();
