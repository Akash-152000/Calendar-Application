import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import moment from 'moment'
import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { CalendarToday, Description } from '@material-ui/icons';
import TimeField from 'react-simple-timefield';
import axios from 'axios';

const useStyle = makeStyles(() => ({

  root: {
    display: 'flex',


  },
  event: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // background: 'red',
    height: '302x',
    width: '100%'
  },
  date: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: '10px'
  },
  description: {
    marginTop: '10px'
  },
  Time: {
    marginTop: '20px'
  },
  btn: {
    marginTop: '20px'
  }
}));

export default function Chart({ table,setCurrent,createMeeting,change,setChange }) {

  const classes = useStyle();
  const [dateState, setDateState] = useState(new Date());
  const [date, setDate] = useState('Select Date');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('04:20')
  const [endTime, setEndTime] = useState('04:20')

  const datee = moment(dateState).format('MMMM Do YYYY')
  const changeDate = (e) => {
    setDateState(e)
  }

  
  return (

    <div className={classes.root}>
      <div className={classes.calendar}>
        <Calendar
          value={dateState}
          onChange={changeDate}
        />
      </div>
      <div className={classes.event}>
        <div className={classes.date}>
          {/* <CalendarToday style={{ fontSize: "30px",marginTop:'10px' }} /> */}
          <Typography variant="h4">{moment(dateState).format('MMMM Do YYYY')}{setCurrent(moment(dateState).format('MMMM Do YYYY'))}</Typography>
        </div>
        <div className={classes.title}>
          <Description style={{ fontSize: "30px", marginTop: '10px' }} /> <TextField id="standard-basic" label="Add title" size="small" onChange={(e) => { setTitle(e.target.value) }} />
        </div>
        <div className={classes.description}>
          <Description style={{ fontSize: "30px", marginTop: '10px' }} /> <TextField id="standard-basic" label="Description" size="small" onChange={(e) => { setDescription(e.target.value) }} />
        </div>
        <div className={classes.Time}>
          <TextField
            style={{ marginRight: '10px ' }}
            label="Start Time"
            defaultValue="04:20"
            type="time"
            onChange={(e) => { setStartTime(e.target.value) }}
          />
          <TextField
            label="End Time"
            defaultValue="04:20"
            type="time"
            onChange={(e) => { setEndTime(e.target.value) }}
          />
        </div>
        <div className={classes.btn}>
          <Button variant="contained" color="primary" onClick={()=>{createMeeting(dateState,title,description,startTime,endTime,table,setCurrent,change,setChange)}} >Create Meeting</Button>
        </div>

      </div>
    </div >
  );
}