import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authreducer";

const reducers = combineReducers({
  authReducer: authReducer,
  // assign redux-form to 'form' key.
  form: formReducer,
});

export default reducers;
