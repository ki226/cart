import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "../../Store/configureStore";
import OrderMenuContainerComponent from "../../Components/ContainerComponents/OrderMenuContainerComponent";
import NavContainerComponent from "../../Components/ContainerComponents/NavContainerComponent";
import OrderListContainerComponent from "../../Components/ContainerComponents/OrderListContainerComponent";
import "./Order.scss";

const Order = () => {
  const store = configureStore();
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="Order">
          <NavContainerComponent />
          <div className="OrderTitleForm">
            <h2 className="OrderTitle">장바구니</h2>
          </div>
          <OrderMenuContainerComponent />
          <OrderListContainerComponent />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default Order;
