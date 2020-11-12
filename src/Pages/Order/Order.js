import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "../../Store/configureStore";
import CountContainerComponent from "../../Components/ContainerComponents/CountContainerComponent";
import DispatchComponent from "../../Containers/CountDispatchContainer/CountDispatchContainer";
import OrderItems from "../../Components/OrderItems/OrderItems";
import "./Order.scss";

const Order = () => {
  const store = configureStore();
  // const persistor = persistStore(store);

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <div className="Order">
        <CountContainerComponent />
        <div className="OrderTitleForm">
          <h2 className="OrderTitle">장바구니</h2>
        </div>
        <OrderItems />
      </div>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default Order;
