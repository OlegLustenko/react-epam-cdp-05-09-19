import {CHANGE_FILTER_TEXT} from '../../../actions/filter-users';

export const selectUsers = (state) => {
  return state.users.users;
};

export const selectIsActive = (state) => {
  return state.users.showActive;
};

export const showActive = () => (dispatch, getState) => {
  dispatch({
    type: 'SET_ACTIVE',
  });
};

export const clearFilter = () => {
  return {
    type: CHANGE_FILTER_TEXT,
    payload: '',
  };
};