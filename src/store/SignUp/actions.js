export const signInChangeUserName = 'signInChangeUserName'
export const signInChangeUserPassword = 'signInChangeUserPassword'
export const signInChangeUserConfirmPassword = 'signInChangeUserConfirmPassword'
export const signInChangeUserEmail = 'signInChangeUserEmail'

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

export const setConfirmPassword = (password) => {
  return {
    type: signInChangeUserConfirmPassword,
    payload: password
  }
}

export const setEmail = (email) => {
  return {
    type: signInChangeUserEmail,
    payload: email
  }
}