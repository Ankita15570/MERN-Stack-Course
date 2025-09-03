// Variables
// 1. var
// 2. let
// 3. const

const myFunction = () => {
  try {
    var x = 10; // Function-scoped variable
    var x = 20; // Redeclaration is allowed
    x = 30; // Reassignment is allowed

    console.log(x);

    if (true) {
      let a = 100; // Block-scoped variable
      // let a= 200; // Redeclaration is not allowed
      a = 300; // Reassignment is allowed
      console.log(a);
    }

    const y = 50; // Block-scoped variable
    // const y = 60; // Redeclaration is not allowed
    // y = 70; // Reassignment is not allowed
    console.log(y);
  } catch (error) {}
};
myFunction();
