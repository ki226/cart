import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProduct } from "../../Actions/ProductAction";
import Nav from "../../Components/Nav/Nav";
import ProductList from "../../Components/ProductList/ProductList";
import { MOCK_URL } from "../../Config/Config";
import "./Cart.scss";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      method: "GET",
      url: MOCK_URL,
    }).then((res) => dispatch(setProduct(res.data.products)));
  });

  return (
    <div className="Cart">
      <Nav />
      <div className="titleForm">
        <h2 className="title">상품 목록</h2>
      </div>
      <ProductList />
    </div>
  );
};

export default Cart;
