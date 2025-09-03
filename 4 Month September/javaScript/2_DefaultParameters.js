const myName = (name = "Ankita") => {
  try {
    console.log(`My name is ${name}`);
  } catch (error) {
    console.log(error);
  }
};
myName("Anshu");
