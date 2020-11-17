import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import cartIcon from "../../Images/cart-icon.png";

const Nav = (props) => {
  const { amount } = props;

  return (
    <nav>
      <Link to="/">
        <span>wemarkett</span>
      </Link>
      <div className="cartImg">
        <Link to="/order">
          <img alt="cart" src={cartIcon}></img>
          <div className="quantNum">{amount}</div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
