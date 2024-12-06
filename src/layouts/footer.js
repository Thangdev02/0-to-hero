import React from 'react';
import { Box, Typography, Container } from '@mui/material';

// Footer component
const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Box style={contentStyle} sx={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
        <Container maxWidth="lg">
                <Typography variant="body2" align="center">
                    &copy; {new Date().getFullYear()} My Website. All rights reserved.
                </Typography>
            </Container>
      </Box>
    </footer>
  );
};

// Styles for the footer
const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
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
