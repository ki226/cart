import React from "react";
import "./OrderMenu.scss";

const OrderMenu = (props) => {
  const { amount, items } = props;
  return (
    <div className="OrderMenu">
      <ul className="OrderMenuLayout">
        <li>
          <input type="checkbox" />
          전체선택 &nbsp; 1/{amount}
        </li>
        <li>상품정보</li>
        <li>수량</li>
        <li>상품금액</li>
      </ul>
    </div>
  );
};

export default OrderMenu;
