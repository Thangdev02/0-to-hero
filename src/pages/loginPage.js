import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginService } from '../services/authService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const user = await loginService(username, password);
  
      // Decode the token to extract the user's role
      const token = localStorage.getItem('authToken');
      const base64Url = token.split('.')[1];
      const payload = JSON.parse(atob(base64Url));
  
      console.log('Decoded Payload:', payload); // Log the payload to inspect its content
  
      // Extract the role correctly from the payload
      const userRole =
        payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  
      console.log('User Role:', userRole);
      // Redirect based on user role
      if (userRole === 'admin') {
        navigate('/admin');
      } else if (userRole === 'user') {
        navigate('/');
      } else {
        throw new Error('Unknown user role'); // This is where the error occurs
      }
    } catch (err) {
      setError(err.message); // Display the error
    }
  };
  
  

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: '400px' }}>
        <Typography variant="h5" component="h1" sx={{ marginBottom: 2 }}>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" sx={{ marginBottom: 2 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
