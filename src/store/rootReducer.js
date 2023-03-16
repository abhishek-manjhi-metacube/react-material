import users from "./table/reducer";
import {combineReducers} from "redux";

const reducers = combineReducers({
  users,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
