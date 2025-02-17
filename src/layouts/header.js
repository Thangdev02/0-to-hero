import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Header component
const HeaderLayouts = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
      const hasRefreshed = sessionStorage.getItem('hasRefreshed');
      
      if (isLogin && !hasRefreshed) {
        sessionStorage.setItem('hasRefreshed', 'true'); // Mark as refreshed
        window.location.reload(); // Refresh the page once
      }
    }, [isLogin]);

  const handleNavigateLogin = () =>{
    navigate('/login');
  }
  const handleLogout = () => {
    localStorage.removeItem('key');
    setIsLogin(false);
    navigate('/login');
  }
  return (
    <header style={headerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Course</h1>
        <nav>
          <ul style={navStyle}>
            {/* <li><a href="/" style={linkStyle}>Home</a></li>
            <li><a href="/service" style={linkStyle}>Service</a></li>
            <li><a href="/contact" style={linkStyle}>Contact</a></li> */}
            <Link to='/' style={linkStyle}>Home</Link>
            <Link to='/service' style={linkStyle}>Service</Link>
            <Link to='/store' style={linkStyle}>Store</Link>
            <Link to='/contact' style={linkStyle}>Contact</Link>
            <Link to='/admin' style={linkStyle}>Dashboard</Link>
          </ul>
        </nav>
        {!setIsLogin && (
          <Button variant="contained" onClick={handleNavigateLogin}>Login</Button>
        )}
        {setIsLogin && (
          <Button variant="contained" onClick={handleLogout}>Logout</Button>
        )}
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
