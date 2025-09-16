// Template Literals-

const username: string = "Ankita";
console.log(`My Name is ${username}`);

// Spread Operator-

// 1 Array -
// Combines Two Array in One Array.

const firstArray: number[] = [5, 10, 15];
const secondArray: number[] = [20, 25, 30];

const finalArray = [...firstArray, ...secondArray];
console.log(finalArray);

// 2 Object

interface UserDetailsInterface {
  name: string;
  city: string;
  age: number;
}

const userData = {
  name: "Mayuri",
  city: "Pune",
};

const newUserDetail = {
  age: 19,
};

const finalUserDetails = {
  ...userData,
  ...newUserDetail,
};

console.log(finalUserDetails);

// Rest Operator -
// used to collect the remaining elements of an array or object into a single variable.
// It is commonly used in function parameters, array destructuring, and object destructuring to handle variable numbers of arguments

// 1. Array Destructuring
// Array Destructuring:
// The rest operator can collect the remaining elements of an array after destructuring specific elements.

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// 2. Object Destructuring:
// The rest operator collects the remaining properties of an object into a new object.

// const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
// console.log(a); // Output: 1
// console.log(b); // Output: 2
// console.log(rest); // Output: { c: 3, d: 4 }
