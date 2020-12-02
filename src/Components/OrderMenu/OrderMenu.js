import React from "react";
import { useSelector } from "react-redux";
import "./OrderMenu.scss";

const OrderMenu = () => {
  const amount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="OrderMenu">
      <ul className="OrderMenuLayout">
        <li>
          <input type="checkbox" />
          전체선택 &nbsp; 0/{amount}
        </li>
        <li>상품정보</li>
        <li>수량</li>
        <li>상품금액</li>
      </ul>
    </div>
  );
};

export default OrderMenu;
