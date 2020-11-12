import { connect } from "react-redux";
import ProductList from "../ProductList/ProductList";

const countMapStateToProps = (state) => {
  return {
    cartItem: state.cart["items"],
    amount: state.cart["totalAmount"],
  };
};

export default connect(countMapStateToProps)(ProductList);
