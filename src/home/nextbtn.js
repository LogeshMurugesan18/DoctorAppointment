import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import {Link} from 'react-router-dom'
export default function BasicButtons() {
  return (<div id='nxtbtn'>
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Link to='/appointment'>
      <Button  style={{ backgroundColor: 'mediumpurple', color: 'white' }} >Select Doctor</Button></Link>
    </Box></div>
  );
}
