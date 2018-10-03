import {GET_USERS} from '../../actions/get-users';

export const usersReducer = (
  state = {showActive: false, users: []},
  action,
) => {
  switch (action.type) {
    case GET_USERS: {
      return {...state, users: [...action.payload.users]};
    }
    case 'SET_ACTIVE': {
      return {...state, showActive: !state.showActive};
    }
    default: {
      return state;
    }
  }
};
