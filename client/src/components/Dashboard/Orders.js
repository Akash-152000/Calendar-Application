import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Update, Delete, DeleteOutline } from '@material-ui/icons';
import Title from './Title';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateContent from './Update'


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const deleteRow = (table, id, change, setChange) => {
  setChange(!change);
  axios.post("http://localhost:3001/api/delete", {
    table: table,
    id: id
  })
}

export default function Orders({ table, change, setChange }) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [display, setDisplay] = useState(false);


  useEffect(() => {
    axios.post('http://localhost:3001/api/details', {
      table: table,
    }).then((response) => {
      setRows(response.data)
    }, (error) => {
      console.log(error);
    });
  }, [change])

  return (
    <React.Fragment>
      <Title>List of all events</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><b>Date</b></TableCell>
            <TableCell><b>Title</b></TableCell>
            <TableCell><b>Description</b></TableCell>
            <TableCell><b>Start time</b></TableCell>
            <TableCell><b>End time</b></TableCell>
            <TableCell><b>Update</b></TableCell>
            <TableCell><b>Delete</b></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.starttime}</TableCell>
              <TableCell>{row.endtime}</TableCell>
              <TableCell><Update style={{ cursor: 'pointer' }} onClick={() => { setDisplay(!display) }} />{display ?
                <UpdateContent date={row.date} title={row.title} description={row.description} starttime={row.starttime} endtime={row.endtime} />
                : null
              }</TableCell>
              <TableCell><Delete style={{ cursor: 'pointer' }} onClick={() => { deleteRow(table, row.id, change, setChange) }} /></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}