import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Layout.css';

// BUG: Missing import for CSS styles
export function Navigation() {
  // BUG: No active state for current page
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* BUG: Logo link is broken */}
        <Link to="/" className="nav-logo">UniHub</Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/students" className="nav-link">Students</Link>
            {/* BUG: Class name mismatch - nav-link instead of nav-link */}
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-link">Courses</Link>
          </li>
          {/* BUG: Missing admin link */}
          <li className="nav-item">
            {/* BUG: Login button is not functional */}
            <button className="btn-login">Login</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export function Footer() {
  // BUG: Footer content is incomplete
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>{/* BUG: Missing copyright year calculation */}</p>
        <div className="footer-links">
          {/* BUG: Links don't go anywhere */}
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
