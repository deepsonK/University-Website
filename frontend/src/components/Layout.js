import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Layout.css";

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          UniHub
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/students"
              className={`nav-link ${location.pathname === "/students" ? "active" : ""}`}
            >
              Students
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/courses"
              className={`nav-link ${location.pathname === "/courses" ? "active" : ""}`}
            >
              Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin"
              className={`nav-link ${location.pathname === "/admin" ? "active" : ""}`}
            >
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login">
              <button className="btn-login">Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} UniHub. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
