const mongoose = require('mongoose');

// BUG: Missing import for validator
// const validator = require('validator');

const courseSchema = new mongoose.Schema({
  courseCode: {
    type: String,
    required: true
    // BUG: Missing unique constraint
  },
  courseName: {
    type: String,
    required :true // BUG: Missing colon (:)
  },
  credits: {
    type: Number,
    // BUG: No validation for valid credit range
  },
  professor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Professor'
    // BUG: No required field
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    }
  ],
  schedule: String,
  // BUG: Missing room/location field
  capacity: Number
  // BUG: No validation for capacity
});

// BUG: Missing methods like findByCourseCode
// BUG: No pre-hook for validation

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
