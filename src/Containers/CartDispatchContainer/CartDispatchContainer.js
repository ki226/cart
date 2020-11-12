import { connect } from "react-redux";
import ProductList from "../../Components/ProductList/ProductList";
import { addCart } from "../../Actions/CartAction";

const cartMapDispatchToProps = {
  addCart,
};

export default connect(null, cartMapDispatchToProps)(ProductList);
