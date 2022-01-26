import { ADD_PRODUCT } from "../constants/cartConstants";

export const addToCartReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return state + action.payload * 1;

    default:
      return state;
  }
};

export default addToCartReducer;
