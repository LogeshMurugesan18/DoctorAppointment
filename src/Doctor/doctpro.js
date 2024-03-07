// ProfilePage.jsx

import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ProfiilePage = () => {
  const handleEditProfile = () => {
    // Implement the logic for editing the profile
    console.log('Editing profile...');
  };

  const handleLogout = () => {
    // Implement the logic for logging out
    console.log('Logging out...');
  };

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '80vh' }}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper elevation={3} style={{ padding: 16, textAlign: 'center',borderRadius:'10px' }}>
            <Avatar alt="Dr. John Doe's Avatar" src="/path/to/avatar.jpg" sx={{ width: 80, height: 80, margin: 'auto' }} />
            <Typography variant="h5" component="div" sx={{ marginTop: 2 }}>
              John Doe
            </Typography>
            <Typography color="textSecondary" sx={{ marginBottom: 2 }}>
              Pediatrician
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Welcome to my profile! I'm a passionate doctor with a love for the medical field and technology.
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
              Location: City, Country
            </Typography>
            <Link to='/editprofiledoc'><Button variant="outlined" color="primary" onClick={handleEditProfile} sx={{ marginRight: 2 }}>
              Edit Profile
            </Button></Link>

            {/* Logout Button */}
            <Link to='/'><Button variant="outlined" color="secondary" onClick={handleLogout}>
              Logout
            </Button></Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfiilePage;