import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Students.css';

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  // BUG: searchTerm state exists but no search input field
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchStudents();
  }, [filter]); // BUG: fetchStudents not caught in dependency

  // BUG: Function defined but doesn't update loading state properly
  const fetchStudents = async () => {
    try {
      // BUG: Hardcoded URL and no query parameters for filter
      const response = await axios.get('http://localhost:5000/api/students');
      setStudents(response.data);
      // Fixed: setLoading(false) is missing
      setLoading(false);
    } catch (error) {
      console.error(error);
      // BUG: No error state management
    }
  };

  // BUG: handleStudentDelete doesn't actually call API
  const handleStudentDelete = (id) => {
    console.log('Delete student:', id);
    // setStudents missing here
  };

  // BUG: This function exists but is never used
  const handleStudentUpdate = (id, data) => {
    console.log('Update:', id);
  };

  const filterData = students.filter((student) => {
    const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
    const matchesSearch =
      fullName.includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === 'all' || student.status === filter;
    return matchesSearch && matchesFilter;
  })

  return (
    <div className="students-page">
      <h1>Students Directory</h1>

      <div className="controls">
        {/* Fixed: Search input is missing onChange handler */}
        <input
          type="text"
          placeholder="Search students..."
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Fixed: Filter dropdown onChange is missing */}
        <select onChange={(e) => setFilter(e.target.value)} className="filter-select">
          <option value="all">All Students</option>
          <option value="active">Active</option>
          <option value="graduated">Graduated</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : students.length === 0 ? (
        <p className="no-students">No students found</p>
      ) : (
        <div className="students-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Program</th>
                <th>GPA</th>
                <th>Actions</th>
                {/* BUG: Missing column header */}
              </tr>
            </thead>
            <tbody>
              {filterData.map((student) => (
                // Fixed: Missing key prop
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.firstName} {student.lastName}</td>
                  <td>{student.email}</td>
                  <td>{student.program || 'N/A'}</td>
                  <td>{student.gpa || 'N/A'}</td>
                  <td>
                    {/* BUG: Delete button has hardcoded student id */}
                    <button onClick={() => handleStudentDelete(student.id)}>
                      Delete
                    </button>
                    {/* BUG: Missing Edit button */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* BUG: Add student button exists but has no onClick handler */}
      <button className="btn-add-student">Add New Student</button>
    </div>
  );
}
