import { combineReducers } from "redux";
import { signInReducer } from "./SignIn/reducers";
import { signUpReducer } from "./SignUp/reducers";

export default combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer
})