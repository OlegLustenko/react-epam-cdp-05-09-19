import {combineReducers} from 'redux';

import {usersReducer} from './users-reducer';
import {filterTextReducer} from './filter-text-reducer/filter-text-reducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  filterText: filterTextReducer,
});