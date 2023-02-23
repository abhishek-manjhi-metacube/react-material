import * as tableActions from "./tableActions";

const addNewUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(tableActions.addUser(user));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

const removeUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(tableActions.removeUser(user));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

// const getUserList = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(tableActions.getAllUser());
//     } catch (err) {
//       console.log(err);
//       throw err;
//     }
//   };
// };

const getUserList = () => async dispatch => {
  dispatch(tableActions.getAllUser())
}

export { addNewUser, removeUser, getUserList };
