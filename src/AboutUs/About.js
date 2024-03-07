import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import v from './Abtvideo.mp4';
// const teamMembers = [
//   {
//     name: 'John Doe',
//     position: 'Founder and CEO',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     name: 'Jane Smith',
//     position: 'Chief Medical Officer',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   // Add more team members as needed
// ];

const AboutUsPage = () => {
  return (
    <div id='abt'>
      <span className='b'></span>
      <Container maxWidth="md">
        <Box sx={{ mt: 4 }}>
          <div id='abt2'>
            <Typography variant="h3" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome to Doc Finder, your dedicated platform for online doctor appointments. Our commitment is to make healthcare accessible and convenient for everyone. Welcome to a new era of doctor appointments!
            </Typography>
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              We are on a mission to revolutionize healthcare by providing a seamless and user-friendly platform for scheduling doctor appointments online.
              Our goal is to bridge the gap between patients and healthcare providers.
              We empower patients by giving them the freedom to schedule appointments at their convenience.
              No more waiting on hold or struggling to find the right doctor; we've simplified the process for you.
              Our platform is designed with you in mind. We prioritize user experience, making it easy for both patients and healthcare providers to navigate and use our system seamlessly.
            </Typography>
          </div>
          <Box
            component="ul"
            sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
          >
            {/* MediaCover Card 1 */}
            {/* Adjust styles as needed */}
            <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
              {/* MediaCover CardContent */}
              <CardContent>
              <iframe
        title="YouTube Video"
        width="100%"  // Adjust the width as needed
        height="400"  // Adjust the height as needed
        src={v}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
              </CardContent>
            </Card>
            {/* <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
              <CardContent>
                <Typography
                  level="body-lg"
                  fontWeight="lg"
                  textColor="#fff"
                  mt={{ xs: 12, sm: 18 }}
                >
                  Video
                </Typography>
              </CardContent> 
            </Card>*/}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default AboutUsPage;
