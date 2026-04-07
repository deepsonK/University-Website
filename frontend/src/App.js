import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
// BUG: Import path doesn't exist yet
import { Navigation, Footer } from './components/Layout';
import Home from './pages/Home';
import StudentsPage from './pages/Students';
import CoursesPage from './pages/Courses';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  // BUG: Error state exists but is never used
  const [error, setError] = useState(null);

  useEffect(() => {
    // BUG: API endpoint is hardcoded, should use environment variable
    // BUG: No error handling
    axios.get('http://localhost:5000/api/students')
      .then(response => {
        setStudents(response.data);
      })
      // BUG: catch block is missing
  }, []);

  // BUG: Wrong syntax - should be arrow function
  const handleStudentAdd = function(student) {
    // BUG: Not actually adding the student to the state
    console.log('Student added:', student);
  };

  // BUG: Missing loading state UI
  // BUG: Missing error state UI
  
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          {/* BUG: Routes are incomplete */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            {/* BUG: Missing admin routes */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
