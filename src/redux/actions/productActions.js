import axios from "axios";
import {
  PRODUCT_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "../constants/productConstants";

export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });

    const { data } = await axios.get("/data/data.json");
    console.log("DATA iz akcije", data);
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
