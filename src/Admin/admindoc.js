import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(name, spl, hosp, mail, mobile) {
  return { name, spl, hosp, mail, mobile };
}

const rows = [
  createData('Rathish', 'ENT', 'ABC Hospital', 'rathishprince01@gmail.com', 7894561230),
  createData('Kavin', 'Dental', 'ABC Hospital', 'kavin123@gmail.com', 7894562580),
  createData('Logesh', 'Cardiology', 'ABC Hospital', 'logesh2233@gmail.com', 4562284690),
  createData('Rathish', 'ENT', 'ABC Hospital', 'rathishprince01@gmail.com', 7894561230),
  createData('Kavin', 'Dental', 'ABC Hospital', 'kavin123@gmail.com', 7894562580),
  createData('Logesh', 'Cardiology', 'ABC Hospital', 'logesh2233@gmail.com', 4562284690),
];

export default function DocTable() {
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
            <TableCell>Doctor Name</TableCell>
            <TableCell align="right">Specialization</TableCell>
            <TableCell align="right">Hospital</TableCell>
            <TableCell align="center">Email</TableCell>
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
              <TableCell align="justify">{row.spl}</TableCell>
              <TableCell align="right">{row.hosp}</TableCell>
              <TableCell align="justify">{row.mail}</TableCell>
              <TableCell align="right">{row.mobile}</TableCell>
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
