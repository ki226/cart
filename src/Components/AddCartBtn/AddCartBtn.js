import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../Actions/CartAction";
import "./AddCartBtn.scss";
import cartIcon from "../../Images/cart-icon.png";

const AddCartBtn = (props) => {
  const { products } = props;
  const dispatch = useDispatch();

  return (
    <div className="addCartBtn" onClick={() => dispatch(addCart(products))}>
      <img alt="addCartBtn" src={cartIcon}></img>
      <span>장바구니 담기</span>
    </div>
  );
};

export default AddCartBtn;
