import React, {Component} from 'react';

import {SearchBar} from '../search-bar';
import {ContactList} from '../contacts-list';
import {filterUsers} from '../../actions/filter-users';

import './contacts.css';
import {connect} from 'react-redux';
import {
  selectUsers,
} from '../filters/actions/filter-by-name-anna';

import {selectContacts} from '../../selectors/select-contacts';
import {
  selectFilteredAndActiveContacts,
  selectFilteredContacts,
} from '../../selectors/select-filtered-contacts';
import {selectFilterText} from '../../selectors/select-filter-text';

export class ContactsComponent extends Component {
  render() {
    const {filterText, filterUsers, contacts} = this.props;

    return (
      <div className="contactApp">
        <SearchBar filterText={filterText} onUserInput={filterUsers}/>
        <ContactList contacts={contacts} filterText={filterText}/>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return (state) => {
    return {
      filterText: selectFilterText(state),
      contacts: selectFilteredAndActiveContacts(state),
    };
  };
};

export const Contacts = connect(mapStateToProps, {
  filterUsers,
})(ContactsComponent);
