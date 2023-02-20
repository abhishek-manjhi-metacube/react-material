import { ADD_USER, REMOVE_USER } from "./actionTypes";
import mockData from "../utils/mock.json";

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
    default:
      return state;
  }
};

export default tableReducer;
