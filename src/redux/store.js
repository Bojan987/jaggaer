import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { addToCartReducer, isVisibleReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  cart: addToCartReducer,
  isVisible: isVisibleReducer,
});

const initialState = {};

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;
