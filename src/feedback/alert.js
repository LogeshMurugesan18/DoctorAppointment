import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts() {
  return (<div id='alert'>
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error in your appointment  — <strong>check it out!</strong>
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        your appoinment has been successfully placed!— <strong>check it out!</strong>
      </Alert>
    </Stack></div>
  );
}
