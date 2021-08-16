import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { ListItemSecondaryAction } from '@material-ui/core';
import { InsertComment } from '@material-ui/icons';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  card:{
    background:'#1087FF',
    display:'flex',
    flexDirection:'column',
    margin:'10px',
    borderRadius:'20px',

    
  }
});




export default function Deposits({ current, table }) {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log("current", current)
    axios.post('http://localhost:3001/api/today', {
      current: current,
      table: table,
    }).then((response) => {
      setData(response.data)
    }, (error) => {
      console.log(error);
    });
  }, [current,data])

  return (
    <React.Fragment>
      <Title>{current}</Title>
      {data.map((items) => (
        <div >
          {/* <p>{items.title}{console.log(data)}</p> */}
          <div className={classes.card}>
            <p><b>Title:</b> {items.title}</p>
            <p><b>Description: </b>{items.description}</p>
            <p><b>Start Time:</b> {items.starttime}</p>
            <p><b>End Time:</b> {items.endtime}</p>
          </div>
        </div>

      ))}
    </React.Fragment>
  );
}