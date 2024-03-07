import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, CardMedia, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Paitedit = () => {
  const [doctorInfo, setDoctorInfo] = useState({
    fullName: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    description: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement signup logic here
    console.log('Doctor signup:', doctorInfo);
  };

  return (
      <Grid container spacing={2} sx={{ maxWidth: '1200px', height: '100%', overflow: 'hidden',marginTop:'7%', gap:'100px',marginLeft:'10%' }}>
        <Grid item xs={12} sm={4}>
          <CardMedia style={{borderRadius:'10px' }}
            component="img"
            height="400"
            alt=" Image"
            src="https://i.pinimg.com/236x/15/00/63/150063946e617647e8b42b1a5ac13fb0.jpg" // Replace with the actual image URL
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: 4, textAlign: 'center' }}>
            <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
              Edit Profile
            </Typography>
            <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={doctorInfo.fullName}
                onChange={handleChange}
                required
                sx={{ marginBottom: 2 }}
              />
              {/* <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={doctorInfo.email}
                onChange={handleChange}
                required
                sx={{ marginBottom: 2 }}
              /> */}
              <TextField
                fullWidth
                label="New Password"
                type="password"
                name="new password"
                value={doctorInfo.password}
                onChange={handleChange}
                required
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={doctorInfo.confirmPassword}
                onChange={handleChange}
                required
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobile number"
                value={doctorInfo.mobile}
                onChange={handleChange}
                required
                sx={{ marginBottom: 2 }}
              />

              <Link to="/profile" style={{ textDecoration: 'none' }}>
                <Button type="submit" variant="contained" style={{ background: 'mediumpurple' }}>
                  Update
                </Button>
              </Link>
            </form>
          </Paper>
        </Grid>
      </Grid>
    // </Box>
  );
};

export default Paitedit;
