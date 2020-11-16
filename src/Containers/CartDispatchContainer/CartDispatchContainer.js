import { connect } from "react-redux";
import AddCartBtn from "../../Components/AddCartBtn/AddCartBtn";
import { addCart } from "../../Actions/CartAction";

const cartMapDispatchToProps = {
  addCart,
};

export default connect(null, cartMapDispatchToProps)(AddCartBtn);
