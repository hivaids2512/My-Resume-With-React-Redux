import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import AppLayout from './views/components/AppLayout'

class App extends Component {
  render() {
    return (
      <div>
        <AppLayout/>
      </div>
    );
  }
}

export default App;
