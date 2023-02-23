import { ADD_USER, GET_USERS_LIST, REMOVE_USER } from "./actionTypes";
import mockData from "../utils/mock.json";
import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
  users: mockData,
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
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
    case REMOVE_USER:
      return {
        ...state.users,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    case GET_USERS_LIST:
      return {...state};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tableReducer,
});

export default rootReducer;
