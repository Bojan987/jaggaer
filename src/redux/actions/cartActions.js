import { ADD_PRODUCT, IS_VISIBLE } from "../constants/cartConstants";
export const addProduct = (quantity) => {
  return {
    type: ADD_PRODUCT,
    payload: quantity,
  };
};

export const isVisibleAction = (isVisible) => {
  return {
    type: IS_VISIBLE,
    payload: isVisible,
  };
};
