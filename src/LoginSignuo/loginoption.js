import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const items = [
  { imageUrl: 'https://8f430952.rocketcdn.me/wp-content/uploads/2018/11/race-AI-med-banner.gif' },
  { imageUrl: 'https://assets-global.website-files.com/5b6106c192c3f985a0cb3273/5b64efce5fc94c5dbc46f8c2_characters.gif' },
  { imageUrl: 'https://cdn.dribbble.com/users/64533/screenshots/4593751/animated---medical-ai-v3.gif' },
];

const LoginComponentWithCarousel = () => {
  const handleLogin = (role) => {
    console.log(`Logging in as ${role}`);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  const renderCarouselItem = (item, index) => (
    <Paper key={index} elevation={3}>
      <img src={item.imageUrl} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%' }} />
    </Paper>
  );

  return (
    <div className='option'>
      <div className="rat" style={{ marginLeft:'50%',marginRight:'30%',marginTop:'20%' }}>
        <div className="login-container">
          <h1>Continue as ..</h1>
          <div className="login-buttons">
            <Link to="/AdminLogin" ><Button variant="contained" style={{ backgroundColor: 'mediumpurple' }} onClick={() => handleLogin('Admin')}>Admin</Button></Link>
            <Link to="/doctorlogin"><Button variant="contained" style={{ backgroundColor: 'mediumpurple' }} onClick={() => handleLogin('Doctor')}>Doctor</Button></Link>
            <Link to="/login"><Button variant="contained" style={{ backgroundColor: 'mediumpurple' }} onClick={() => handleLogin('Patient')}>Patient</Button></Link>
          </div>
          <div className="additional-options">
            {/* Additional options can be added here */}
          </div>
        </div>
      </div>

      <Box
        sx={{
          width: '500px',
          height: '500px',
          margin: 'auto',
          marginTop: '-17%',
          marginLeft:'13%',
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Carousel>{items.map((item, index) => renderCarouselItem(item, index))}</Carousel>
      </Box>
    </div>
  );
};

export default LoginComponentWithCarousel;
