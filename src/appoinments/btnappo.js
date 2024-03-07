import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export default function ContainedButtons() {
  const buttonStyle = {
    backgroundColor: 'mediumpurple',
  };

  return (
    <div id='mkappo'>
      <Stack direction="row" spacing={2}>
        <Link to='/feedback'>
          <Button variant="contained" style={buttonStyle}><div id='t3'>Book Slot</div></Button>
        </Link>
        <Link to='/home'>
          <Button variant="contained" style={buttonStyle}><div id='t4'>Back</div></Button>
        </Link>
      </Stack>
    </div>
  );
}
