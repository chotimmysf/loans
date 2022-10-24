import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar/>
        <Dashboard/>
      </div>
    </Router>
  );
}

export default App;