import T from './types';

export const changeStatus = (status) => ({
  type: T.CHANGE_STATUS,
  status
});

export const search=(firstDate,secondDate,searchText)=>({
  type: T.SEARCH,
  firstDate,
  secondDate,
  searchText,
});