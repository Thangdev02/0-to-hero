import React from 'react';
import { Link } from 'react-router-dom';

// Header component
const HeaderLayouts = () => {
  return (
    <header style={headerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>My Website</h1>
        <nav>
          <ul style={navStyle}>
            {/* <li><a href="/" style={linkStyle}>Home</a></li>
            <li><a href="/service" style={linkStyle}>Service</a></li>
            <li><a href="/contact" style={linkStyle}>Contact</a></li> */}
            <Link to='/' style={linkStyle}>Home</Link>
            <Link to='/service' style={linkStyle}>Service</Link>
            <Link to='/contact' style={linkStyle}>Contact</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Styles for the header
const headerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',
};

const contentStyle = {
  margin: '0 auto',
  maxWidth: '1200px',
};

const titleStyle = {
  fontSize: '2rem',
  margin: '0',
};

const navStyle = {
  listStyleType: 'none',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 15px',
  fontSize: '1rem',
};

export default HeaderLayouts;
