import { combineReducers } from "redux";
import authReducer from "./authreducer";

const reducers = combineReducers({
  authReducer: authReducer,
});

export default reducers;
