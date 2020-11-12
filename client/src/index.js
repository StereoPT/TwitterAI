import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { RootProvider } from './context';

ReactDOM.render(
  <RootProvider>
    <Router>
      <App />
    </Router>
  </RootProvider>,
  document.getElementById('root')
);