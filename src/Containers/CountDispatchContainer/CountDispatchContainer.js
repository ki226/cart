import { connect } from "react-redux";
import AddCartBtn from "../../Components/AddCartBtn/AddCartBtn";
import { setCount } from "../../Actions/CountAction";

const countMapDispatchToProps = {
  setCount,
};

export default connect(null, countMapDispatchToProps)(AddCartBtn);
