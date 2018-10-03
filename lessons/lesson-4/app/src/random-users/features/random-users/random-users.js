import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Contacts} from './components/contacts';
import {getUsers} from './actions/get-users';

import './random-users.css'
import {Filters} from './components/filters/filters';

export class RandomUsersComponent extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="random-users">
        <Filters />
        <Contacts/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.users,
  };
};

const mapDispatchToProps = {
  getUsers,
};

export const RandomUsers = connect(mapStateToProps, mapDispatchToProps)(RandomUsersComponent);