// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connectMongoDB = require("./config/db");
const Student = require("./models/studentModel");
const { CreateStudent, getAllStudent } = require("./controllers/studentController");

// Create an Express application
const app = express();

// Port where the server will run
const PORT = 2000;

// Middleware to parse JSON data from requests
app.use(bodyParser.json());

// connect mongoDB

connectMongoDB()




// CREATE - Add a new student (POST /students)
app.post("/students",CreateStudent);
 

// READ ALL - Get all students (GET /students)
app.get("/students",getAllStudent);