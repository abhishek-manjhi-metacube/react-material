import * as types from "./types";

const addUser = (user) => {
  return {
    type: types.ADD_USER,
    payload: user,
  };
};

const removeUser = (user) => {
  return {
    type: types.REMOVE_USER,
    payload: user,
  };
};

const getAllUser = (data) => {
  return {
    type: types.GET_USERS_LIST,
    payload: data
  };
};

export { addUser, removeUser, getAllUser };
