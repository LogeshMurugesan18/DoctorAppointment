import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <div id='imgid'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 280 }}
        image="https://img.freepik.com/premium-vector/avatar-bearded-doctor-doctor-with-stethoscope-vector-illustrationxa_276184-31.jpg "
        title="doc"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
          About Doctor & Details 

        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button><div id='docappo'>Make Appoinment</div></Button>
        <Button><div id='docappo2'>Back</div></Button>
      </CardActions> */}
    </Card></div>
  );
}
