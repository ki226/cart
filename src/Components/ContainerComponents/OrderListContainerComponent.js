import { connect } from "react-redux";
import orderList from "../OrderList/OrderList";

const OrderListMapStateToProps = (state) => {
  return {
    cartItem: state.cart["items"],
  };
};

export default connect(OrderListMapStateToProps)(orderList);
