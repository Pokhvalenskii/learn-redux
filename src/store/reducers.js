import { combineReducers } from "redux";
import { signInReducer } from "./signIn/reducers";
import { signUpReducer } from "./signUp/reducers";


export const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer
})