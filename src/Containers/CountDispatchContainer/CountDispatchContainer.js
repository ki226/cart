import { connect } from "react-redux";
import ProductList from "../../Components/ProductList/ProductList";
import { setCount } from "../../Actions/CountAction";

const countMapDispatchToProps = {
  setCount,
};

export default connect(null, countMapDispatchToProps)(ProductList);
