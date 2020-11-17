import React from "react";
import "./OrderList.scss";

const OrderList = (props) => {
  const { cartItem } = props;
  return (
    <div className="OrderList">
      {cartItem &&
        cartItem.map((item) => {
          return (
            <ul className="OrderListLayout" key={item.id}>
              <li>
                <input type="checkbox" />
              </li>
              <li>
                <img className="productImg" src={item.img} alt={item.name} />
              </li>
              <li className="productInfo">
                <h5>{item.name}</h5>
                <span>{item.price.toLocaleString()}</span>
              </li>
              <li></li>
            </ul>
          );
        })}
    </div>
  );
};

export default OrderList;
