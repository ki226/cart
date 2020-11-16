import React from "react";
import "./AddCartBtn.scss";
import cartIcon from "../../Images/cart-icon.png";

const addCartBtn = (props) => {
  const { products, addCart, setCount } = props;
  console.log(products);

  return (
    <div className="addCartBtn" onClick={() => addCart(products)}>
      <img alt="addCartBtn" src={cartIcon}></img>
      <span>장바구니 담기</span>
    </div>
  );
};

export default addCartBtn;
