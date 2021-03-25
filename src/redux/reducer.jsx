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
      // Create a new copy of our wishlist
      let currentList = [...state.wishList]
      // newList will hold our new values
      let newList = []
      for(let i = 0; i < currentList.length; i++){
        let item = currentList[i]
        // Once the item is found in our array, we remove the item using slice and return the new list
        if(item === action.payload){
          let left = currentList.slice(0, i)
          let right = currentList.slice(i + 1, currentList.length - 1)
          newList = [...left, ...right]
        }
      }
      return {
        wishList: newList,
      };
    default:
      return {
        wishList: [],
      };
  }
};

export default reducer;
