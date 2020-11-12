import React, { useState, useEffect } from "react";
import "./OrderItems.scss";

const OrderItems = () => {
  return (
    <div className="OrderItems">
      <ul className="OrderMenu">
        <li>
          <input type="checkbox" />
        </li>
        <li>전체선택</li>
        <li>상품정보</li>
        <li>수량</li>
        <li>상품금액</li>
      </ul>
    </div>
  );
};

export default OrderItems;
