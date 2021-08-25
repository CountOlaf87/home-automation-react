import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MainPage from './components/pages/mainPage/MainPage';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './components/pages/mainPage/LoginPage';
import MainPageyar  from './components/pages/mainPage/MainPage';

function App() {
  const adminUser = {
    userName: "olaf",
    password: "test123"
  }

  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });
  const classes = useStyles();

  const [user, setUser] = useState({userName: ""})
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.userName === adminUser.userName && details.password === adminUser.password ){
      console.log("Logged in");
      setUser({
        userNamer: details.userName
      })
    } else {
      console.log("details do not match");
    }
  }

  const Logout = () => {
    console.log("logout");
    setUser({userName: "" });
  }

  return (
    <>
      {(user.userName !== "") ? (
        <MainPage Logout={Logout}/>
      ) : (
        <LoginPage Login={Login} error={error} />
      )}
      
    </>
  );
}

export default App;
