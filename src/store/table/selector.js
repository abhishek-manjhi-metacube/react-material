import { createSelector } from "reselect";

const featureSelector = users => users;

export const getData = createSelector(featureSelector, (users) => {
   
  return users.users.table.users
});
