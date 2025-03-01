import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <div className="header">
      <nav className="header-nav">
        <ul className="nav-links">
          <li><a href="#" className="nav-link active">Home</a></li>
          <li><a href="#" className="nav-link">Events</a></li>
          <li><a href="#" className="nav-link">Tickets</a></li>
        </ul>
        <div className="nav-actions">
          <button className="header-cta">Get Started</button>
          <div className="login-signup">
            <a href="#" className="login-btn">Login</a>
            <a href="#" className="signup-btn">Sign up</a>
          </div>
        </div>
      </nav>
      <div className="header-animation">
        <span className="animate-circle"></span>
        <span className="animate-circle"></span>
        <span className="animate-circle"></span>
      </div>
    </div>
  );
}

export default Header;