import React from "react";
import CartDispatchContainer from "../../Containers/CartDispatchContainer/CartDispatchContainer";
import "./ProductList.scss";

const ProductList = (props) => {
  const { products } = props;

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
              <CartDispatchContainer products={product} />
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;
