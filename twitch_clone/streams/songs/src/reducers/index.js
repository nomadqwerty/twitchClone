import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authreducer";
import streamReducer from "./streamReducer";

const reducers = combineReducers({
  authReducer: authReducer,
  // assign redux-form to 'form' key.
  form: formReducer,
  streams: streamReducer,
});

export default reducers;
