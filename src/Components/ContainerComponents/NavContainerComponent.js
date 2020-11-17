import { connect } from "react-redux";
import nav from "../Nav/Nav";

const NavMenuMapStateToProps = (state) => {
  return {
    amount: state.cart["totalAmount"],
  };
};

export default connect(NavMenuMapStateToProps)(nav);
