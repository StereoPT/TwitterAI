import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

function App() {
  return (
    <React.Fragment>
      <Navbar name="Guido Pereira" username="TheStereoPT" />
      <Switch>
        <Route exact path="/" component={ Dashboard } />
        <Route exact path="/profile" component={ Profile } />
      </Switch>
    </React.Fragment>
  );
}

export default App;
