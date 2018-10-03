import {usersAPI} from '../../../api/users/users-api';

export const GET_USERS = 'GET_USERS';

export const getUsers = () => (dispatch) => {
  usersAPI.getUsers().then(users => {
    dispatch({
      type: GET_USERS,
      payload: {
        users,
      },
    });
  });
};