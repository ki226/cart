import { connect } from "react-redux";
import Nav from "../Nav/Nav";

const countMapStateToProps = (state) => {
  return {
    amount: state.cart["totalAmount"],
  };
};

export default connect(countMapStateToProps)(Nav);
