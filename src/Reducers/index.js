import { combineReducers } from "redux";
import counter from "./CountReducer";
import cart from "./CartReducer";
import product from "./ProductReducer";

export default combineReducers({
  cart,
  counter,
  product,
});
