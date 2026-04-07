import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css';

// BUG: Component not using any passed props
export default function Home(props) {
  const [announcements, setAnnouncements] = useState([]);
  // BUG: Loading state but never set to false
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // BUG: Endpoint doesn't exist on backend
    axios.get('http://localhost:5000/api/announcements')
      .then(res => setAnnouncements(res.data))
      .catch(err => console.log('Error loading announcements'))
      // BUG: Error not displayed to user
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        {/* BUG: Background image path doesn't exist */}
        <div className="hero-content">
          <h1>Welcome to University</h1>
          <p>Your gateway to knowledge and excellence</p>
          {/* BUG: CTA button doesn't have onClick handler */}
          <button className="btn-primary">Get Started</button>
        </div>
      </section>

      <section className="announcements">
        <h2>Latest Announcements</h2>
        {/* BUG: No loading state UI */}
        {/* BUG: No error state UI */}
        <div className="announcement-list">
          {/* BUG: announcements might be empty, no fallback message */}
          {announcements.map((announce) => (
            // BUG: Missing key prop
            <div className="announcement-card">
              <h3>{announce.title}</h3>
              <p>{announce.content}</p>
              {/* BUG: Date formatting missing */}
              <span>{announce.date}</span>
            </div>
          ))}
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
