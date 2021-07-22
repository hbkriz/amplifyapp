import React, { useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Navigation from '../components/Navbar';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(lat, long, createDate) {
//   return { lat, long, createDate };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable() {
  const classes = useStyles();

  const userName = window.location.search.substring(1);

  const [histories, setHistory] = React.useState([]);

    useEffect(async () => {
      await fetch(`https://dzqitngp44.execute-api.us-east-2.amazonaws.com/Prod/api/Location/get/history/${userName}`)
      .then(res => res.json())
      .then(response => {
        setHistory(response);
      });
   });


  return (
    <div>
      <Navigation userName={userName} />
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Latitude</TableCell>
            <TableCell align="right">Longitude</TableCell>
            <TableCell align="right">Created&nbsp;Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {histories.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.latitude}</TableCell>
              <TableCell align="right">{row.longitude}</TableCell>
              <TableCell align="right">{row.createdDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}
