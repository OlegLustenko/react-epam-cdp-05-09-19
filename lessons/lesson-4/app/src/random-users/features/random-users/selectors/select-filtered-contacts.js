import {createSelector} from 'reselect';

import {selectContacts} from './select-contacts';
import {selectFilterText} from './select-filter-text';

// export const selectFilteredContacts = (state) => {
//   const contacts = selectContacts(state);
//   const filterText = selectFilterText(state);
//   const filteredContacts = contacts.filter(user => user.name.includes(filterText));
//
//   return filteredContacts;
// };

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterText],
  (contacts, filterText) => {
    return contacts.filter(user => user.name.includes(filterText));
  },
);

export const selectFilteredAndActiveContacts = createSelector([selectFilteredContacts], (
  filteredContacts => {
    return filteredContacts.filter(contact => contact.isActive);
  }
));
