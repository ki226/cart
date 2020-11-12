import { connect } from "react-redux";
import ProductList from "../ProductList/ProductList";

const countMapStateToProps = (state) => {
  return {
    products: state.product["products"],
  };
};

export default connect(countMapStateToProps)(ProductList);
