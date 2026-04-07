import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Courses.css';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  // BUG: selectedCourse exists but nothing uses it
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // BUG: No error handling
    axios.get('http://localhost:5000/api/courses')
      .then(res => {
        setCourses(res.data);
        setLoading(false);
      });
    // BUG: Missing catch block
  }, []);

  // BUG: Function defined but incomplete
  const enrollCourse = (courseId) => {
    console.log('Enrolling in course:', courseId);
    // TODO: Call API to enroll
    // Missing axios request
  };

  // BUG: Missing logic for unenroll
  const unenrollCourse = (courseId) => {
    // Not implemented
  };

  if (loading) {
    return <div>Loading courses...</div>;
  }

  return (
    <div className="courses-page">
      <h1>Available Courses</h1>
      
      {/* BUG: No filter for course department */}
      {/* BUG: No sort functionality */}

      <div className="courses-container">
        {courses.length === 0 ? (
          <p>No courses available</p>
        ) : (
          // BUG: No CSS for course-grid
          <div className="course-grid">
            {courses.map((course) => (
              // BUG: Missing key prop
              <div className="course-card">
                <h3>{course.courseName}</h3>
                <p className="course-code"><strong>Code:</strong> {course.courseCode}</p>
                <p className="course-credits"><strong>Credits:</strong> {course.credits}</p>
                <p className="course-professor">
                  {/* BUG: Professor name might be null/undefined */}
                  <strong>Professor:</strong> {course.professor}
                </p>
                <p className="course-schedule">
                  {/* BUG: No time formatting */}
                  <strong>Schedule:</strong> {course.schedule}
                </p>
                <p>
                  {/* BUG: No capacity/enrollment info shown */}
                  <strong>Capacity:</strong> {course.capacity}
                </p>
                
                <div className="course-actions">
                  {/* BUG: Button onClick handler references undefined variable */}
                  <button onClick={() => enrollCourse(course.id)}>
                    Enroll
                  </button>
                  {/* BUG: Missing unenroll button */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* BUG: Missing pagination for large course lists */}
    </div>
  );
}
