import * as React from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';

export default function InputFormProps() {
  const buttonStyle = {
    backgroundColor: 'mediumpurple',
  };

  return (
    <div id='fbk'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          alert('Your Feedback has been saved');
        }}
      >
        <Stack spacing={1}>
          <Input id='fbk1' placeholder="Please enter your feedback!" required />
          <Button id='fbk2' type="submit" style={buttonStyle}>
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
}
