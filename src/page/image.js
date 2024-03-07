import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (<div id='ccc'>
    <Card sx={{ maxWidth: 345, borderRadius:'10px' }}>
      <CardMedia
        component="img"
        alt="doc"
        height="340"
        image="https://nursegrid.com/wp-content/uploads/2017/09/shutterstock_227163250-e1507719014155.jpg"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textShadow:'0 0 3px crimson, 0 0 5px purple'}}>
        Transform your practice with our user-friendly interface to provide better patient care.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    </div>
  );
}
