import React from 'react';
import {withLoadingSpinner} from '../hocs';

export const ContactListComponent = ({contacts, filterText}) => {
  return (
    <ul>
      {contacts.map((contact, i) => (
        <li key={`column_${i}_${contact.email}`}>
          <img src={contact.thumbnail} alt=""/>
          <div className="contactData">
            <strong>{contact.name} {contact.isActive && '★'}</strong>
            <br/>
            <small>{contact.email}</small>
          </div>
        </li>
      ))}
    </ul>
  );
};

export const ContactList = withLoadingSpinner(ContactListComponent);
