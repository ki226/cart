import React from "react";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "../../Store/configureStore";
import Nav from "../../Components/Nav/Nav";
import OrderMenuContainerComponent from "../../Components/ContainerComponents/OrderMenuContainerComponent";
import OrderListContainerComponent from "../../Components/ContainerComponents/OrderListContainerComponent";
import "./Order.scss";

const Order = () => {
  const store = configureStore();
  const persistor = persistStore(store);

  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        <div className="Order">
          <Nav />
          <div className="OrderTitleForm">
            <h2 className="OrderTitle">장바구니</h2>
          </div>
          <OrderMenuContainerComponent />
          <OrderListContainerComponent />
        </div>
      </PersistGate>
    </>
  );
};

export default Order;
