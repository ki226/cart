import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { persistStore } from "redux-persist";
import { setProduct } from "../../Actions/ProductAction";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "../../Store/configureStore";
import Nav from "../../Components/Nav/Nav";
import ProductList from "../../Components/ProductList/ProductList";
import "./Cart.scss";

const Cart = () => {
  const store = configureStore();
  const persistor = persistStore(store);
  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3000/Mock/MockData.json`,
    }).then((res) => dispatch(setProduct(res.data.products)));
  });

  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        <div className="Cart">
          <Nav />
          <div className="titleForm">
            <h2 className="title">상품 목록</h2>
          </div>
          <ProductList />
        </div>
      </PersistGate>
    </>
  );
};

export default Cart;
