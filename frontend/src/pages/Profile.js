import { useState } from 'react';
import { loginUser } from '../api/userApi';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedInUser, setLoggedInUser] = useState('');

  const handleLogin = async () => {
    try {
      const res = await loginUser({ email, password });
      if (res.data.message) {
        // New user registered
        setMessage(res.data.message);
        setLoggedInUser(res.data.name || email); // show name if available
      } else {
        // Existing user logged in
        setMessage('Logged in successfully');
        setLoggedInUser(res.data.name);
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || 'Login failed.');
    }
  };

  if (loggedInUser) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">{message}</Typography>
        <Typography variant="h5">Welcome, {loggedInUser}!</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Login</Typography>
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleLogin}>Login</Button>
    </Box>
  );
}
