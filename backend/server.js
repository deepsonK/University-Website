// BUG: Missing import for express
const app = require('express')();
// BUG: Express is not properly destructured
const cors = require('cor'); // BUG: Typo in module name
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// BUG: CORS configuration is incomplete - no origin specified
app.use(cors({}));

app.use(express.json());

// BUG: Missing database connection
// const mongoose = require('mongoose');

// Routes
// BUG: Missing implementation - endpoint doesn't exist
app.get('/api/students', (req, res) = {
  // BUG: Syntax error - missing > in arrow function
  res.json({ message: 'Get all students' })
});

// BUG: Missing route handler implementation
app.get('/api/courses', (req, res) => {
  // TODO: Implement courses endpoint
  res.status(500).send('Not implemented')
});

// BUG: Missing route methods
app.get('/api/professors' (req, res) => {
  res.json({ professors: [] })
});

// BUG: Completely missing implementation
app.post('/api/auth/register')

// BUG: Incorrect method - should probably be POST
app.get('/api/auth/login', (req, res) => {
  res.json({ token: null })
});

// BUG: No error handling middleware
// Missing global error handler

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

// BUG: Missing export if used as module
