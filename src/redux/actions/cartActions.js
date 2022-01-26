import { ADD_PRODUCT } from "../constants/cartConstants";
export const addProduct = (quantity) => {
  return {
    type: ADD_PRODUCT,
    payload: quantity,
  };
};
