import { signInChangeUserName, signInChangeUserPassword } from "./actions"

const defaultState = {
  name: '',
  password: ''
}

export const signInReducer = (state = defaultState, action) => {
  switch(action.type) {
    case signInChangeUserName:
      return { ...state, name: action.payload }
    case signInChangeUserPassword:
      return { ...state, password: action.payload }
    default: break;
  }
  return state;
}