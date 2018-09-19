import React, {Component} from 'react';
import {connect} from 'react-redux';

import {incrementCounter, incrementAsync} from './actions';

import './App.css';

export class AppComponent extends Component {
  render() {
    const {
      counter,
      incrementCounter,
    } = this.props;

    return (
      <div className="App">
        <div>
          <h3>Counter</h3>
          <button
            onClick={() => {
              this.props.incrementCounter(1);
            }}>
            INCREMENT
          </button>
          <div>counter state: {counter}</div>
          <button
            onClick={() => {
              this.props.dispatch({type: 'DECREMENT'});
            }}>
            DECREMENT
          </button>

          <button
            onClick={() => {
              incrementCounter(100);
            }}>
            INCREMENT 100
          </button>

          <button
            onClick={() => {
              this.props.incrementCounter(-100);
            }}>
            DECREMENT 100
          </button>
        </div>
        <hr/>

        <div>
          <h3>ASYNC Counter</h3>
          <button
            onClick={() => {
              this.props.incrementAsync(1);
            }}>
            ASYNC INCREMENT
          </button>
          <div>counter state: {counter}</div>
          <button
            onClick={() => {
              this.props.dispatch({type: 'DECREMENT'});
            }}>
            ASYNC DECREMENT
          </button>
        </div>
      </div>
    );
  }
}

const selectCounter = (state) => {
  return state.counterReducer.counter
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    counter: selectCounter(state),
  };
};

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  incrementAsync,

};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
