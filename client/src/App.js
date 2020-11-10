import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Trend from './pages/Trend';

function App() {
  return (
    <div className="container-fluid vh-100 d-flex flex-column p-0 overflow-hidden">
      <Navbar />
      <div className="row flex-grow-1">
        <div className="row flex-fill px-5">
          <Switch>
            <Route exact path="/" component={ Dashboard } />
            <Route exact path="/trend/:query" component={ Trend } />
            <Route exact path="/profile" component={ Profile } />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
