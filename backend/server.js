const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const Student = require('./models/Student');
const PORT = process.env.PORT || 5000;

app.use(cors({}));

app.use(express.json());


 const mongoose = require('mongoose');

// Routes
// BUG: Missing implementation - endpoint doesn't exist
app.get('/api/students', (req, res) => {
  // BUG: Syntax error - missing > in arrow function
  res.json({ message: 'Get all students' });
});

// BUG: Missing route handler implementation
app.get('/api/courses', (req, res) => {
  // TODO: Implement courses endpoint
  res.status(500).send('Not implemented');
});

// BUG: Missing route methods
app.get('/api/professors', (req, res) => {
  res.json({ professors: [] });
});

// BUG: Completely missing implementation
app.post('/api/auth/register', (req, res) => {
  // TODO: Implement registration endpoint
  res.status(500).send('Not implemented');
});

app.post('/api/auth/login', async(req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isPasswordValid = await bcryptjs.compare(password, student.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: student._id, email: student.email },
    process.env.JWT_SECRET || 'your_secret_key', 
    { expiresIn: '7d' });
    res.json({ token, student: { id: student._id, email: student.email, firstName: student.firstName, lastName: student.lastName } });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }

});

// BUG: No error handling middleware
// Missing global error handler

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/university', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✓ MongoDB connected successfully');
})
.catch((err) => {
  console.error('✗ MongoDB connection error:', err.message);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

// BUG: Missing export if used as module
