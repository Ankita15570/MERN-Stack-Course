// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Create an Express application
const app = express();

// Port where the server will run
const PORT = 2000;

// Middleware to parse JSON data from requests
app.use(bodyParser.json());

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`); // Log server running message
});

// Connect to MongoDB database             // DB Name Any Name we can use
mongoose.connect("mongodb://127.0.0.1:27017/database-name",);

// Connection events for MongoDB
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:")); // Log connection error
db.once("open", () => console.log("Connected to MongoDB")); // Log success on connection

// Define schema for Student
const studentSchema = new mongoose.Schema({
    name: String,           // Student's full name
    age: Number,            // Student's age
    email: String,          // Student's email address
    course: String,         // Course the student is enrolled in
    admissionDate: String,    // Date of admission
});

// Create model for Student from schema
const Student = mongoose.model("Student", studentSchema);

/* ===========================
      CRUD API ROUTES
=========================== */

// CREATE - Add a new student (POST /students)
app.post("/students", async (req, res) => {
    try {
        const student = new Student(req.body); // Create new student from request body
        await student.save(); // Save to database
        res.status(201).json(student); // Return created student
    } catch (err) {
        res.status(400).json({ error: err.message }); // Return error if creation fails
    }
});

// READ ALL - Get all students (GET /students)
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find(); // Get all students from DB
        res.json(students); // Return all student records
    } catch (err) {
        res.status(500).json({ error: err.message }); // Return error if something goes wrong
    }
});

// READ ONE - Get a single student by ID (GET /students/:id)
app.get("/students/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id); // Find student by ID
        if (!student) return res.status(404).json({ error: "Student not found" }); // If not found
        res.json(student); // Return student data
    } catch (err) {
        res.status(500).json({ error: err.message }); // Return error
    }
});

// UPDATE - Update student info by ID (PUT /students/:id)
app.put("/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Find and update
        if (!student) return res.status(404).json({ error: "Student not found" }); // If not found
        res.json(student); // Return updated student
    } catch (err) {
        res.status(400).json({ error: err.message }); // Return error
    }
});

// DELETE - Delete a student by ID (DELETE /students/:id)
app.delete("/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id); // Find and delete
        if (!student) return res.status(404).json({ error: "Student not found" }); // If not found
        res.json({ message: "Student deleted successfully" }); // Confirm deletion
    } catch (err) {
        res.status(500).json({ error: err.message }); // Return error
    }
});

