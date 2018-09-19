import {combineReducers} from 'redux';

const initialState = {counter: 0};
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    case 'DECREMENT': {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    default: {
      return state;
    }
  }
};

export const authorsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    case 'DECREMENT': {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  counterReducer,
  authors: authorsReducer,
  videoList: combineReducers({
    authorsReducer
  }),
});