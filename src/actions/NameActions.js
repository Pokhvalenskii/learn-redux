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