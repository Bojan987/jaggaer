import data from "../../resources/data/data.json";
import {
  PRODUCT_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "../constants/productConstants";

export const getProduct = () => (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });

    dispatch({
      type: PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
