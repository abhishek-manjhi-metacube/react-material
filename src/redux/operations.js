import * as tableActions from "./tableActions";

const addNewUser = (user) => {
  return async (dispatch) => {
    try {
      console.log(user);
      dispatch(tableActions.addUser(user));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export { addNewUser };
