import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  let stateRef = state
  switch (action.type) {
    case ADD_ITEM:
      return {
        wishList: [...stateRef, action.payload],
      };
    case DELETE_ITEM:
      return {
        wishList: [],
      };
    default:
      return {
        wishList: [],
      };
  }
};

export default reducer;
