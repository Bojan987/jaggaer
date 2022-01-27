import {
  PRODUCT_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "../constants/productConstants";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
