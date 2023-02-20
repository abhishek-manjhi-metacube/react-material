import { ADD_USER, REMOVE_USER } from "./actionTypes";

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

const removeUser = (user) => {
  return {
    type: REMOVE_USER,
    payload: user,
  };
};

export { addUser, removeUser } ;

