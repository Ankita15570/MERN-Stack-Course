const Student = require("../models/studentModel");


const CreateStudent = async(req,res) => {
     try {
  

    const { firstName, lastName, std, rollNo, address } = req.body;

    
  const studentData = new Student({
      firstName,
      lastName,
      std,
      rollNo,
      address,
    });

    await studentData.save(); 

    res.status(201).json(studentData);
  } catch (err) {
    res.status(400).json({ error: err.message }); 
}
};


const getAllStudent = async (req,res) => {
     try {
    const students = await Student.find(); 

    res.json(students); 
  } catch (err) {
    res.status(500).json({ error: err.message }); 
  }
};

module.exports = {CreateStudent,getAllStudent};