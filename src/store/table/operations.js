import * as actions from "./actions";

const addNewUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(actions.addUser(user));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

const removeUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(actions.removeUser(user));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

const getUserList = (data) => {
  return async (dispatch) => {
    try {
      dispatch(actions.getAllUser(data));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export { addNewUser, removeUser, getUserList };
