import React from 'react';
import useStyle from './style';
import { CssBaseline, TextField, Button, Typography } from '@material-ui/core'
import { AccountCircle, Email, Lock } from '@material-ui/icons'
import { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios'


function SignIn(props) {
    const classes = useStyle();

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {

        axios.post('http://localhost:3001/api/register',{
            fname:fname,
            lname:lname,
            email:email,
            password:password,
        }).then(()=>{
            alert("SUCCESSFUL INSERT")
        },(error) => {
            console.log(error);
          });
        

    }



    return (
        <div className={classes.root}>
            <CssBaseline />
            <div className={classes.container}>
                <div className={classes.fields}>
                    <Typography variant="h4" style={{ marginBottom: '20px' }}>Sign In</Typography>
                    <div className={classes.user}>
                        <AccountCircle style={{ fontSize: 50 }} /><TextField required id="standard-required" label="First Name" onChange={(e) => { setFname(e.target.value) }} />
                        <TextField required id="standard-required" label="Last Name" onChange={(e) => { setLname(e.target.value) }} />
                    </div>
                    <div className={classes.email}>
                        <Email style={{ fontSize: 50 }} /><TextField required id="standard-required" label="Email address" onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className={classes.password}>
                        <Lock style={{ fontSize: 50 }} /><TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                    <span>For password only use 'a-z' , 'A-Z' ,0-9</span>
                    <div className={classes.btn}>
                        <Button variant="contained" color="secondary" onClick={submit}><Link to="/Login" className={classes.link}>Sign In</Link></Button>

                    </div>


                </div>
                <p></p>
                <span >Already a member? <Link to="/Login">Login</Link> </span>
            </div>


        </div>
    );
}

export default SignIn;