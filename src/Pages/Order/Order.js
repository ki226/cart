import React from "react";
import Nav from "../../Components/Nav/Nav";
import OrderMenu from "../../Components/OrderMenu/OrderMenu";
import OrderList from "../../Components/OrderList/OrderList";
import "./Order.scss";

const Order = () => {
  return (
    <div className="Order">
      <Nav />
      <div className="OrderTitleForm">
        <h2 className="OrderTitle">장바구니</h2>
      </div>
      <OrderMenu />
      <OrderList />
    </div>
  );
};

export default Order;
