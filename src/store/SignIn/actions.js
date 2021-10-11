export const signInChangeUserName = 'signInChangeUserName';
export const signInChangeUserPassword = 'signInChangeUserPassword';

export const setName = (name) => {
  return {
    type: signInChangeUserName,
    payload: name
  }
}

export const setPassword = (password) => {
  return {
    type: signInChangeUserPassword,
    payload: password
  }
}