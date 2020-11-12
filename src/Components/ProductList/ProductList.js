import React from "react";
import "./ProductList.scss";
import cartIcon from "../../Images/cart-icon.png";

const ProductList = (props) => {
  const { products, addCart } = props;

  return (
    <div className="ProductList">
      {products &&
        products.map((product) => {
          return (
            <div className={`productLayout item${product.id}`} key={product.id}>
              <img
                className="productImg"
                alt={product.name}
                src={product.img}
              ></img>
              <p className="productName">{product.name}</p>
              <p className="productPrice">
                {product.price.toLocaleString()} 원
              </p>
              <div className="addCartBtn" onClick={() => addCart(product)}>
                <img alt="addCartBtn" src={cartIcon}></img>
                <span>장바구니 담기</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;
