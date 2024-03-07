import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CardActionArea, CardActions } from '@mui/material';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Consider adding login logic and error handling
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        gap: '100px', // Adjust the gap to leave space between the two components
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image="https://assets-global.website-files.com/5b6106c192c3f985a0cb3273/5b64efce5fc94c5dbc46f8c2_characters.gif"
            alt="loginpage"
          />
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
            Admin Login
          </Typography>
          <form
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              width: '300px',
            }}
          >
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-label="Username"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
            <Link to='/adminhome' style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                style={{ backgroundColor: 'mediumpurple' }}
                onClick={handleLogin}
                fullWidth
              >
                Login
              </Button>
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
