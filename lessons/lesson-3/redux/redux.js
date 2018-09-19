const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;
  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const dispatch = (action) => {
    const newState = reducer(state, action);

    if (newState !== state) {
      state = newState;
      listeners.forEach((listener) => {
        listener();
      });
    }
  };

  return {
    dispatch,
    getState,
    subscribe,
  };
};

const reducer = (state = {counter: 0}, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const getById = document.getElementById;

const buttonIncrement = document.getElementById('inc');
const buttonDecrement = document.getElementById('dec');
const counter = document.getElementById('counter');

const store = Redux.createStore(reducer);

buttonIncrement.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});

buttonDecrement.addEventListener('click', () => {
  store.dispatch({type: 'DECREMENT'});
});

const updateView = () => {
  console.log(store.getState());
  counter.innerHTML = store.getState().counter;
};

store.subscribe(updateView);
