import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar/>
          <Dashboard/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;