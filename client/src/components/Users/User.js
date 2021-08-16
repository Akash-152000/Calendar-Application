import React from 'react';
import { Button, CssBaseline } from '@material-ui/core'
import useStyle from './style'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import SignIn  from '../SignIn/SignIn.js';
import Login from '../Login/Login.js';

function User(props) {
    const classes = useStyle();
    return (

        <div>
                <CssBaseline />
                <div className={classes.root}>
                    <div className={classes.container}>
                        <Button className={classes.btn} variant="contained" color="primary"><Link to="/SignIn" className={classes.link}>Sign In</Link></Button>
                        <Button className={classes.btn} variant="contained" color="secondary"><Link to="/Login" className={classes.link}>Login</Link></Button>
                    </div>
                </div>
        </div>
    );
}

export default User;