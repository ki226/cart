import React, { useEffect } from "react";
import axios from "axios";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { setProduct } from "../../Actions/ProductAction";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "../../Store/configureStore";
import NavContainerComponent from "../../Components/ContainerComponents/NavContainerComponent";
import ProductContainerComponent from "../../Components/ContainerComponents/ProductContainerComponent";
import "./Cart.scss";

const Cart = () => {
  const store = configureStore();
  const persistor = persistStore(store);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3000/Mock/MockData.json`,
    }).then((res) => store.dispatch(setProduct(res.data.products)));
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="Cart">
          <NavContainerComponent />
          <div className="titleForm">
            <h2 className="title">상품 목록</h2>
          </div>
          <ProductContainerComponent />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default Cart;
