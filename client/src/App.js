import './App.css';
import User from './components/Users/User.js'
import SignIn from './components/SignIn/SignIn.js'
import Login from './components/Login/Login.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const login = (user, password, Fname, setFname, table, setTable,setMessage,history,authorized,setAuthorized) => {
  axios.post("http://localhost:3001/api/login", {
    username: user,
    password: password
  }).then((response) => {
    if (response.data.message) {
      setMessage(response.data.message);
      setAuthorized(false);
    } else {
      console.log(response)
      setMessage('');
      setAuthorized(true);
      setFname(response.data[0].fname);
      setTable(response.data[0].tablename);
      history.push("/Dashboard")
    }


  })
  

}

function App() {

  const [fname, setFname] = useState('');
  const [table, setTable] = useState('');
  const [authorized, setAuthorized] = useState(false);

  return (

    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <User />
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/Login">
            <Login login={login} fname={fname} setFname={setFname} table={table} setTable={setTable} authorized={authorized} setAuthorized={setAuthorized}/>
          </Route>
          <Route path="/Dashboard">
            <Dashboard authorized={authorized} fname={fname} table={table}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
