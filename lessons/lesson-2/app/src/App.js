import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import UsersApp from './lifecycle-hooks/users-app';
import {RouterPage} from './react-router/router-page';
import {
  ChildComponent,
  ParentComponent_v1
} from './ways-of-composition/composition';

import {Counter} from './ways-of-composition/render-props';
import {HOCExample} from './HOC-example/HOCExample';
import AutoFocusComponent from './ways-of-composition/inheritance-inversion';
import UsersApp from './lifecycle-hooks/users-app';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterPage />
      </div>
    );
  }
}

export default App;
