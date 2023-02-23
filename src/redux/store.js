import { createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";
import rootReducer from "./tableReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(Thunk))
);

export default store;
