import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function ControlledOpenSelect() {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div id='time'>
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Open to select time slot
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Time</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={9}>9 A.M</MenuItem>
          <MenuItem value={11}>11 A.M</MenuItem>
          <MenuItem value={1}>1 P.M</MenuItem>
          <MenuItem value={3}>3 P.M</MenuItem>
          <MenuItem value={5}>5 P.M</MenuItem>
          <MenuItem value={7}>7 P.M</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
