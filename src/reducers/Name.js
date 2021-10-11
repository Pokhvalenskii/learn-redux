import * as types from '../constants/ActionTypes';

const initState = {
  firstName: 'stas',
  secondName: 'basov',
}

export const newReducer = (state = initState, action) => {
  switch (action.type) {
    case types.firstName:
      return { ...state, firstName: action.payload };
    case types.secondName:
      return { ...state, secondName: action.payload};
    default: break;
  }
  return state;
};