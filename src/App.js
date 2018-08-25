import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
import FindJobs from './components/FindJobs';
import HomePage from './components/HomePage'
import 'semantic-ui-css/semantic.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path={`/`} component={HomePage} />
        <Route exact path={`/findjobs`} component={FindJobs} />
      </div>
    );
  }
}

export default App;
