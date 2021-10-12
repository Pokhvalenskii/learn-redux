import { combineReducers } from "redux";
import { signInReducer } from "./signIn/reducers";

export const rootReducer = combineReducers({
  signIn: signInReducer
})