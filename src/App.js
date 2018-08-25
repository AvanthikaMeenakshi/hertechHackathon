import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
import FindJobs from './components/FindJobs';
import 'semantic-ui-css/semantic.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path={`/`} component={FindJobs} />
      </div>
    );
  }
}

export default App;
