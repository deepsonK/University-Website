import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css';

export default function Home({ onGetStarted }) {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // FIX: Use the correct backend endpoint
    axios.get('http://localhost:5000/api/home/announcements')
      .then(res => {
        setAnnouncements(res.data);
        setLoading(false);  // FIX #1: Set loading false on success
      })
      .catch(err => {
        console.error('Error loading announcements:', err);
        setError('Failed to load announcements. Please try again later.');
        setLoading(false);  // FIX #2: Set loading false on error
      });
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to University</h1>
          <p>Your gateway to knowledge and excellence</p>
          {/* FIX: Added onClick handler via prop */}
          <button className="btn-primary" onClick={onGetStarted}>
            Get Started
          </button>
        </div>
      </section>

      <section className="announcements">
        <h2>Latest Announcements</h2>

        {/* FIX #3: Show loading spinner while fetching */}
        {loading && (
          <div className="loading-spinner">
            <p>Loading announcements...</p>
          </div>
        )}

        {/* FIX: Show error message to user */}
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {/* FIX: Show empty state if no announcements */}
        {!loading && !error && announcements.length === 0 && (
          <p className="no-announcements">No announcements at this time.</p>
        )}

        <div className="announcement-list">
          {announcements.map((announce) => (
            // FIX: Use unique id as key instead of array index
            <div className="announcement-card" key={announce.id}>
              <h3>{announce.title}</h3>
              <p>{announce.content}</p>
              {/* FIX: Format date properly */}
              <span>
                {announce.date
                  ? new Date(announce.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })
                  : 'Date not available'}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Our University?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🎓</span>
            <h3>World-Class Faculty</h3>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🏛️</span>
            <h3>Modern Facilities</h3>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📚</span>
            <h3>Diverse Curriculum</h3>
          </div>
        </div>
      </section>
    </div>
  );
}