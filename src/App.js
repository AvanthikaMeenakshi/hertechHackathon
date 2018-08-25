import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
import FindJobs from './components/FindJobs';
import HomePage from './components/HomePage';
import FindTalents from './components/FindTalents';
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path={`/`} component={HomePage} />
        <Route exact path={`/findjobs`} component={FindJobs} />
        <Route exact path={`/findtalents`} component={FindTalents} />
      </div>
    );
  }
}

export default App;
