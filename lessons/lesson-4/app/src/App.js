import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {RandomUsersApp} from './random-users/main';
import {InfinityTableApp} from './infinity-table/infinity-table-app';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <RandomUsersApp/>
      </div>
    );
  }
}

export default App;
