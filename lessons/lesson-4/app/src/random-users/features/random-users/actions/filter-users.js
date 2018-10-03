export const CHANGE_FILTER_TEXT = 'CHANGE_FILTER_TEXT';

export const filterUsers = filterText => {
  return {
    type: CHANGE_FILTER_TEXT,
    payload: filterText,
  };
};