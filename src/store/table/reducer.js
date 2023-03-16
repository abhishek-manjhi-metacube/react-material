import * as types from "./types";
import mockData from "../../utils/mock.json";
import { combineReducers } from "redux";

const initialState = {
  users: mockData,
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER: {
      return {
        users: [
          ...state.users,
          {
            id: state.users.length + 1,
            firstName: action.payload.firstName || "",
            lastName: action.payload.lastName || "",
            age: action.payload.age || "",
          },
        ],
      };
    }
    case types.REMOVE_USER:
      return {
        ...state.users,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    case types.GET_USERS_LIST:
      return {...state.users};
    default:
      return state;
  }
};

const reducer = combineReducers({
  table: tableReducer,
});

export default reducer;
