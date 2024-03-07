import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function DisableElevation() {
  return (
    <div id='aaa'>
     <Link to='/doctorsignup'> <Button variant="contained" sx={{ backgroundColor: 'purple' }}>
        Enroll as DOCTOR
      </Button></Link>
      <Link to='/login' > <Button variant="contained" sx={{ backgroundColor:'mediumblue' }}>
        Enroll as PATIENT
      </Button></Link> 
    </div>
  );
}
