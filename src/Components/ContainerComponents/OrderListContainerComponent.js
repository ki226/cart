import { connect } from "react-redux";
import orderList from "../OrderList/OrderList";

const OrderListMapStateToProps = (state) => {
  // const overlabItem = new Array(state.cart.items.map((items) => items.id));
  // overlabItem.forEach((item) => {
  //   if (item === state.cart.item.id)
  // });
  return {
    cartItem: state.cart["items"],
  };
};

export default connect(OrderListMapStateToProps)(orderList);
