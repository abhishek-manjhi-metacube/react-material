import { ADD_USER, GET_USERS_LIST, REMOVE_USER } from "./actionTypes";

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

const getAllUser = () => {
  return {
    type: GET_USERS_LIST,
  };
};

export { addUser, removeUser, getAllUser };
