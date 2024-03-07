import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(name, date, time, doc, mob) {
  return { name, date, time, doc, mob };
}

const rows = [
  createData('Rathish', 15, 6, 'Doctor 1', 7894561230),
  createData('Kavin', 23, 9, 'Doctor 2', 7894562580),
  createData('Logesh', 26, 1, 'Doctor 3', 4562284690),
  createData('Rathish', 15, 6, 'Doctor 4', 7894561230),
  createData('Kavin', 23, 9, 'Doctor 5', 7894562580),
  createData('Logesh', 26, 1, 'Doctor 6', 4562284690),
];

export default function PatientTable() {
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
            <TableCell align="center">Doctor</TableCell>
            <TableCell align="right">Mobile no</TableCell>
            <TableCell align="center">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="center">{row.doc}</TableCell>
              <TableCell align="right">{row.mob}</TableCell>
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
