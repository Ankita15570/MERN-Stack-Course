
const mongoose = require("mongoose");

// Define schema for Student
const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  std: String,
  rollNo: String,
  address: String,
});

// Create model for Student from schema
const Student = mongoose.model("Student", studentSchema);

module.exports = Student
