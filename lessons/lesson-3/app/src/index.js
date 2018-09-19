import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import {rootReducer} from './reducer';

import './index.css';
import {App} from './App';

const logMiddleware = store => next => action => {
  console.log('PREV STATE: ', store.getState());
  console.log('ACTION: ', action);
  next(action);
  console.log('CURRENT STATE: ', store.getState());
};

const asyncMiddleware = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch, store.getState);
  } else {
    next(action);
  }
};

const enhanceCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(rootReducer, {
  counter: 2000,
}, enhanceCompose(applyMiddleware(ReduxThunk, logMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
);
