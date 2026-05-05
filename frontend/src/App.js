import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
// BUG: Import path doesn't exist yet
import { Navigation, Footer } from "./components/Layout";
import Home from "./pages/Home";
import StudentsPage from "./pages/Students";
import CoursesPage from "./pages/Courses";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
    axios
      .get(API_URL + "/api/students")
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.error("Error fetching students:", err);
      });
  }, []);

  const handleStudentAdd = (student) => {
    setStudents((prev) => [...prev, student]);
    console.log("Student added:", student);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <Navigation />
          <main>
            {/* BUG: Routes are incomplete */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/students" element={<StudentsPage />} students={students} />
              <Route path="/courses" element={<CoursesPage />} />
              {/* BUG: Missing admin routes */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
