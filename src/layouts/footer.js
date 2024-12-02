import React from 'react';

// Footer component
const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <nav>
          <ul style={navStyle}>
            <li><a href="/about" style={linkStyle}>About</a></li>
            <li><a href="/contact" style={linkStyle}>Contact</a></li>
            <li><a href="/privacy" style={linkStyle}>Privacy Policy</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

// Styles for the footer
const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

const contentStyle = {
  margin: '0 auto',
  maxWidth: '1200px',
};

const navStyle = {
  listStyleType: 'none',
  padding: 0,
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 15px',
};

export default Footer;
