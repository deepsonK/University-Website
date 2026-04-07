const mongoose = require('mongoose');

// BUG: Schema validation is incomplete
const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // Missing required: true
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    // BUG: No email validation
    required: true
  },
  studentId: String,
  // BUG: Wrong field type
  enrollmentDate: { type: String }, // Should probably be Date
  gpa: {
    type: Number
    // BUG: Missing comma
  },
  courses: [String],
  // BUG: Missing timestamps
});

// BUG: Schema created but not exported
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
