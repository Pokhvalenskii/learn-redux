import { 
  signInChangeUserName,
  signInChangeUserPassword,
  signInChangeUserConfirmPassword,
  signInChangeUserEmail 
} from './actions'

const defaultState = {
  name: '',
  password: '',
  confirmPassword: '',
  email: ''
}

export const signUpReducer = (state = defaultState, action) => {
  switch(action.type) {
    case signInChangeUserName:
      return { ...state, name: action.payload }
    case signInChangeUserPassword:
      return { ...state, password: action.payload }
    case signInChangeUserConfirmPassword:
      return { ...state, confirmPassword: action.payload }
    case signInChangeUserEmail:
      return { ...state, email: action.payload }
    default: break;
  }
  return state;
}