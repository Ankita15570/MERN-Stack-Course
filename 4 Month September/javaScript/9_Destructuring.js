//Destructuring - Object

const userInfo = {
  a: "Anshu",
  std: 14,
};
const { a: fullName, std } = userInfo;
console.log(fullName, "Patil");

//Destructuring - Array

const arr = [15, 19, 11, 26];
const [aaaa, rrrr, bbbb] = arr;
console.log(aaaa, rrrr, "====");
