import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, CardMedia, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SignupDoctor = () => {
  const [doctorInfo, setDoctorInfo] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    specialization: '',
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
          <CardMedia
            component="img"
            height="400"
            alt="Doctor Image"
            src="https://assets-global.website-files.com/5b6106c192c3f985a0cb3273/5b64efce5fc94c5dbc46f8c2_characters.gif" // Replace with the actual image URL
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: 4, textAlign: 'center' }}>
            <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
              Doctor Signup
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
              <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={doctorInfo.email}
                onChange={handleChange}
                required
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
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
                label="Specialization"
                name="specialization"
                value={doctorInfo.specialization}
                onChange={handleChange}
                required
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={doctorInfo.description}
                onChange={handleChange}
                required
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                label="Hospital Location"
                name="location"
                value={doctorInfo.location}
                onChange={handleChange}
                required
                sx={{ marginBottom: 2 }}
              />

              <Link to="/doctorappointment" style={{ textDecoration: 'none' }}>
                <Button type="submit" variant="contained" style={{ background: 'mediumpurple' }}>
                  Signup
                </Button>
              </Link>
            </form>
          </Paper>
        </Grid>
      </Grid>
    // </Box>
  );
};

export default SignupDoctor;
