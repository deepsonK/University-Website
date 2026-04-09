import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css';

// Fixed: Component properly handles loading state
export default function Home(props) {
  const [announcements, setAnnouncements] = useState([]);
  // Fixed: Loading state properly managed
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fixed: Properly handle loading and error states
    axios.get('http://localhost:5000/api/announcements')
      .then(res => {
        setAnnouncements(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Error loading announcements');
        setError('Failed to load announcements');
        setLoading(false);
      });
  }, []);

  // Fixed: Show loading spinner
  if (loading) {
    return (
      <div className="home-page">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  // Fixed: Show error state
  if (error) {
    return (
      <div className="home-page">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="home-page">
      <section className="hero">
        {/* Fixed: Background image path doesn't exist */}
        <div className="hero-content">
          <h1>Welcome to University</h1>
          <p>Your gateway to knowledge and excellence</p>
          {/* BUG: CTA button doesn't have onClick handler */}
          <button className="btn-primary">Get Started</button>
        </div>
      </section>

      <section className="announcements">
        <h2>Latest Announcements</h2>
        {/* Fixed: No loading state UI */}
        {/* Fixed: No error state UI */}
        <div className="announcement-list">
          {announcements.length === 0 ? (
            <p className="no-announcements">No announcements available</p>
          ) : (
            announcements.map((announce) => (
              // Fixed: Added key prop
              <div key={announce.id} className="announcement-card">
                <h3>{announce.title}</h3>
                <p>{announce.content}</p>
                {/* BUG: Date formatting missing */}
                <span>{announce.date}</span>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="features">
        {/* BUG: Features are hardcoded, should probably come from API */}
        <h2>Why Choose Our University?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>World-Class Faculty</h3>
            {/* BUG: No icon */}
          </div>
          <div className="feature-card">
            <h3>Modern Facilities</h3>
          </div>
          <div className="feature-card">
            <h3>Diverse Curriculum</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
