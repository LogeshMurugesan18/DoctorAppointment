import Input from '@mui/joy/node/Input';
import { Stack } from '@mui/material';
import * as React from 'react';


export default function InputSlotProps() {
  const inputRef = React.useRef(null);
  return (<div id='calc'>
    <Stack spacing={1.5} sx={{ minWidth: 300, backgroundColor: 'mediumpurple', padding: 2 }}>
      {/* <Input
        type="number"
        defaultValue={2.5}
        slotProps={{
          input: {
            ref: inputRef,
            min: 1,
            max: 5,
            step: 0.1,
          },
        }}
      /> */}
      <Input
        type="date"
        slotProps={{
          input: {
            min: '2023-06-07',
            max: '2024-06-14',
          },
        }}
      />
    </Stack></div>
  );
}
