// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const connectMongoDb = require("./config/db");
const { getAllStudent, CreateStudent, } = require("./controllers/studentController");

// Create an Express application
const app = express();

// Port where the server will run
const PORT = 2000;

// Middleware to parse JSON data from requests
app.use(bodyParser.json());
app.use(cors())

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`); // Log server running message
});

// Connect to MongoDB database
connectMongoDb();

// CREATE - Add a new student (POST /students)
app.post("/students", CreateStudent);

// READ ALL - Get all students (GET /students)
app.get("/students", getAllStudent);