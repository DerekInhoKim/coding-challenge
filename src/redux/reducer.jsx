import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      // We return the current state spread, as not to affect the origional state, with the payload appended to the end of our new wishlist
      return {
        wishList: [...state.wishList, action.payload],
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
