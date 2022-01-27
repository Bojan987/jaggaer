import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { addToCartReducer, isVisibleReducer } from "./reducers/cartReducers";
import { productReducer } from "./reducers/productReducers";

const reducer = combineReducers({
  cart: addToCartReducer,
  isVisible: isVisibleReducer,
  product: productReducer,
});
const middleware = [thunk];
const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
