import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import v from './Bookingdemo.mp4';
const HelpPage = () => {
  return (
    <div id='helpp'>
      <Container maxWidth="md">
        <Box sx={{ mt: 4 }}>
          <Typography variant="h3" gutterBottom>
            Help Center
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to our Help Center! If you have any questions or need assistance, please refer to the information below.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Frequently Asked Questions (FAQs)
          </Typography>
          <Typography variant="body1" paragraph>
            Q: How can I schedule an appointment online?
          </Typography>
          <Typography variant="body2" paragraph>
            A: To schedule an appointment, log in to your account, choose a doctor, select a convenient time slot, and confirm your appointment.
          </Typography>

          <Typography variant="body1" paragraph>
            Q: Can I ask any queries about the  appointment?
          </Typography>
          <Typography variant="body2" paragraph>
            A: Yes, you can raise any querieson your appointment through your feedback dashboard. Please make sure to do so if you have any!
          </Typography>

          {/* Add more FAQs as needed */}

          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you still have questions or need further assistance, please don't hesitate to contact our support team.
          </Typography>
          <Typography variant="body2" paragraph>
            Email: support@docfinder.com
          </Typography>
          <Typography variant="body2" paragraph>
            Phone: 123-456-7890
          </Typography>
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
        </Box>
      </Container>
    </div>
  );
};

export default HelpPage;
