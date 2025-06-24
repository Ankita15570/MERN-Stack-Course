
const mongoose = require("mongoose");
const connectMongoDB = async() => {
    try {
  const connection  =    await mongoose.connect("mongodb://127.0.0.1:27017/students");
  if (connection === true){
  console.log("connected DB..")
  }
    } catch (error) {
     console.log(error)

    }
};

module.exports = connectMongoDB

