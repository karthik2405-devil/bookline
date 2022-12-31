const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
    class: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    classTeacher: {
      type: String,
      required: true,
    },
    subjectList: {
      type: [String],
      required: true,
    },
    students: {
      type: Map,
      of: {
        studentID: {
          type: String,
          required: true,
        },
        marks: {
          type: Map,
          of: Number,
        },
      },
    },
  });
  
const Class = mongoose.model('Response', classSchema);

module.exports = Class;