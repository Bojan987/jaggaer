import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { addToCartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  cart: addToCartReducer,
});

const initialState = {};

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;
