import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ element: Element, role, ...rest }) => {
  // Retrieve the JWT token from localStorage
  const token = localStorage.getItem('authToken');

  // If there's no token, redirect to the login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Decode the token payload (second part of the token)
  let payload;
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    payload = JSON.parse(atob(base64));
  } catch (error) {
    console.error('Invalid token:', error);
    return <Navigate to="/login" />;
  }

  // Extract the user's role from the token payload
  const userRole =
    payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

  console.log('Decoded Role:', userRole);
  console.log('Required Role:', role);

  // Check if the role matches
  if (userRole !== role) {
    return <Navigate to="/*" />; // Redirect to a "not found" or unauthorized page
  }

  // Render the component if all checks pass
  return <Element {...rest} />;
};

export default PrivateRouter;
