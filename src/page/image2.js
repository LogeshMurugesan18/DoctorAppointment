import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (<div id='cc'>
    <Card sx={{ maxWidth: 320 ,objectFit:'cover'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="https://t4.ftcdn.net/jpg/05/85/99/97/360_F_585999763_S3U2kVdcM9A0fF9Wl8hRQmfC1g1xvv2F.jpg"
          alt="doctor"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
