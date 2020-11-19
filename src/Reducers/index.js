import { combineReducers } from "redux";
import cart from "./CartReducer";
import product from "./ProductReducer";

export default combineReducers({
  cart,
  product,
});
