import {CHANGE_FILTER_TEXT} from '../../actions/filter-users';

export const filterTextReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER_TEXT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
