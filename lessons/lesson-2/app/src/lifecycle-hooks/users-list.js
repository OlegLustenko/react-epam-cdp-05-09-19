import React, {Component} from 'react';
import {withState, withHandlers, compose, lifecycle} from 'recompose';

import './users-list.css';

export class UsersListComponent extends Component {
  static defaultProps = {
    users: [{fname: 'test', lname: 'test', id: '0'}]
  };

  renderUsers() {
    return this.props.users.map((user, index) => (
      <li className="users-list-item" key={user.lname + index}>
        <div>fname: {user.fname}</div>
        <div>lname: {user.lname}</div>
      </li>
    ));
  }

  render() {
    const {setLoading, unsetLoading, isLoading} = this.props;

    return (
      <React.Fragment>
        <ul className="users-list">{this.renderUsers()}</ul>
        <button onClick={setLoading}>Refresh</button>
        <p>{isLoading ? 'Loading...' : null}</p>
      </React.Fragment>
    );
  }
}

const userListWithLoader = compose(
  withState('isLoading', 'setLoadingState', false),
  withHandlers({
    setLoading: (state) => () => state.setLoadingState(true, state.getUsers),
    unsetLoading: (state) => () => state.setLoadingState(false)
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (this.props.users !== nextProps.users) {
        this.props.unsetLoading();
      }
    }
  })
);

export const UsersList = userListWithLoader(UsersListComponent);
