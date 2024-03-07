import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function dummyimage() {
  return (
    <>
 <div id='homeimage'> <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 400, width:400, borderRadius:'10px' }}
        image="https://assets-global.website-files.com/5b6106c192c3f985a0cb3273/5b64efce5fc94c5dbc46f8c2_characters.gif"
        title="home page image"
      />
    </Card></div>  
    </>
  )
}
