const express = require('express')
const Class = require("../models/class")
const router = express.Router()

router.post('/details', async (req, res) => {
    try {
        const class_details = new Class({
            class: req.body.class,
            year: req.body.year,
            classTeacher: req.body.classTeacher,
            subjectList: req.body.subjectList,
            students: req.body.students,
        });

        // Save the response to the database
        await class_details.save();

        res.send({ message: 'Class Details saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error saving Class Details' });
    }
});

router.get('/details/:id', async (req, res) => {
    try {
      const class_details = await Class.findById(req.params.id);
      if (!response) {
        return res.status(404).send({ message: 'Class not found' });
      }
      res.send(class_details);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error retrieving class' });
    }
});
  
router.get('/marks/:class/:subject', async (req, res) => {
    try {
      const class_details = await Class.findOne({ class: req.params.class });
      if (!response) {
        return res.status(404).send({ message: 'Class not found' });
      }
      const marks = class_details.students.map((student) => student.marks[req.params.subject]);
      res.send({ marks });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error retrieving marks' });
    }
});
    
module.exports = router;