import { connect } from "react-redux";
import nav from "../ProductList/ProductList";
import OrderMenu from "../OrderMenu/OrderMenu";

const OrderMenuMapStateToProps = (state) => {
  return {
    cartItem: state.cart["items"],
    amount: state.cart["totalAmount"],
  };
};

export default connect(OrderMenuMapStateToProps)(OrderMenu);
