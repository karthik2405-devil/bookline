const express = require('express')
const Student = require("../models/students")
const router = express.Router()


router.post('/students', async (req, res) => {
    try {
      const studentID = req.body.studentID;
      const name = req.body.name;
      const dateOfBirth = req.body.dateOfBirth;
  
      // Create a new student object
      const student = new Student({ studentID, name, dateOfBirth });
  
      // Save the student to the database
      await student.save();
  
      res.send({ message: 'Student details saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error saving student details' });
    }
  });
  
  module.exports = router