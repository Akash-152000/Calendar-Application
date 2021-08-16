import React from 'react';
import { CssBaseline, TextField, Button, Typography } from '@material-ui/core';
import useStyle from './style';
import { useState } from 'react';
import { AccountCircle, Email, Lock } from '@material-ui/icons';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';


function Login({login,fname,setFname,table,setTable,authorized,setAuthorized}) {
    const classes = useStyle();
    const history = useHistory();
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const [message, setMessage] = useState('');

    

    return (
        <div className={classes.root}>
            <CssBaseline />
            <div className={classes.container}>
                <div className={classes.fields}>
                    <Typography variant="h4" style={{ marginBottom: '20px' }}>Login</Typography>
                    <div className={classes.email}>
                    <AccountCircle style={{ fontSize: 50 }}/><TextField required id="standard-required" label="Email address"  onChange={(e)=>{setUser(e.target.value)}}/>
                    </div>
                    <div className={classes.password}>
                        <Lock style={{ fontSize: 50 }} /><TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e)=>{setPassword(e.target.value)}}      
                        />
                    </div>
                    <span>{message}</span>
                    <div className={classes.btn}>
                        <Button variant="contained" color="secondary" onClick={()=>{login(user,password,fname,setFname,table,setTable,setMessage,history,authorized,setAuthorized)}}>Login</Button>
                    </div>
                    {/* <Link to="/Dashboard" className={classes.link}>Login</Link> */}
                </div>
                <p></p>
                <span >Haven't registered yet? <Link to="/SignIn">Register</Link> </span>  
            </div>
        </div>
    );
}

export default Login;