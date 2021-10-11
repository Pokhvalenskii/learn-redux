import * as types from '../constants/ActionTypes';

export const changeFirstName = (newFirstName) => {
  console.log('CHECK', newFirstName);
  return {
    type: types.firstName,
    payload: newFirstName 
  }
}

export const changeSecondName = (newSecondName) => {
  console.log('CHECK', newSecondName);
  return {
    type: types.secondName,
    payload: newSecondName 
  }
}

// export const changeSignUpName = (eame) => {
//   console.log('CHECK', eame);
//   return {
//     type: types.userName,
//     payload: eame 
//   }
// }

// export const changeSignUpEmail = (email) => {
//   console.log('CHECK', email);
//   return {
//     type: types.userEmail,
//     payload: email 
//   }
// }

// export const changeSignUpPassword = (password) => {
//   console.log('CHECK', password);
//   return {
//     type: types.userPassword,
//     payload: password
//   }
// }