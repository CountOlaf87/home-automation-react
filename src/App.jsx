import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import MainPage  from './components/pages/MainPage';
import Reset from './components/Reset';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/reset" component={Reset} />
          <Route exact Path="/dashboard" component={MainPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
