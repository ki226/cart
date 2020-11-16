import { connect } from "react-redux";
import nav from "../ProductList/ProductList";

const countMapStateToProps = (state) => {
  return {
    cartItem: state.cart["items"],
    amount: state.cart["totalAmount"],
  };
};

export default connect(countMapStateToProps)(nav);
