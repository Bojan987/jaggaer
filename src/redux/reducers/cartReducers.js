import { ADD_PRODUCT, IS_VISIBLE } from "../constants/cartConstants";

export const addToCartReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return state + action.payload * 1;

    default:
      return state;
  }
};

export const isVisibleReducer = (state = true, action) => {
  switch (action.type) {
    case IS_VISIBLE:
      return action.payload;

    default:
      return state;
  }
};

export default addToCartReducer;
