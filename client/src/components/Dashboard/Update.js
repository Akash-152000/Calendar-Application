import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField, Typography } from '@material-ui/core';
import { CalendarToday, Description } from '@material-ui/icons';
import TimeField from 'react-simple-timefield';
import axios from 'axios';


const useStyle = makeStyles(() => ({
    root: {
        height: '500px',
        width: '500px',
        position: 'absolute',
        background: 'red',
        top: '20%',
        left: '30%'
    }

}));

function Update({ date, title, description, starttime, endtime }) {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <p>{date}</p>
                <p>{title}</p>
                <p>{description}</p>


                <div className={classes.title}>
                    <Description style={{ fontSize: "30px", marginTop: '10px' }} /> <TextField id="standard-basic" label="Add title" size="small" />
                </div>
                <div className={classes.description}>
                    <Description style={{ fontSize: "30px", marginTop: '10px' }} /> <TextField id="standard-basic" label="Description" size="small" />
                </div>
                <div className={classes.Time}>
                    <TextField
                        style={{ marginRight: '10px ' }}
                        label="Start Time"
                        defaultValue="04:20"
                        type="time"
                        
                    />
                    <TextField
                        label="End Time"
                        defaultValue="04:20"
                        type="time"
                        
                    />
                </div>
                <div className={classes.btn}>
                    <Button variant="contained" color="primary" >Update Meeting</Button>
                </div>
            </div>
        </div>
    );
}

export default Update;