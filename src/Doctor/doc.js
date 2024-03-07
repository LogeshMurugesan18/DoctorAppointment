import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Rathish', 15, 6, 'rathishprince01@gmail.com', 7894561230),
  createData('Kavin', 23, 9, 'kavin123@gmail.com', 7894562580),
  createData('Logesh', 26, 1, 'logesh2233@gmail.com', 4562284690),
];

export default function AccessibleTable() {
  const [data, setData] = React.useState(rows);

  const handleRemove = (name) => {
    // Implement your removal logic here using the name or any unique identifier
    // For now, let's just display an alert
    alert(`Removing ${name}`);

    // If you want to update the state and remove the row, you can use the following approach:
    // const updatedData = data.filter((row) => row.name !== name);
    // setData(updatedData);
  };

  return (
    <TableContainer component={Paper} style={{ width: '50%', marginLeft: '25%', marginTop: '6%' }}>
      <Table sx={{ background: 'mediumpurple' }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Mobile no</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">
                <Button
                  color="secondary"
                  variant="contained"
                  style={{ background: 'crimson' }}
                  onClick={() => handleRemove(row.name)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
