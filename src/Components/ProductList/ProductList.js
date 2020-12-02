import React from "react";
import { useSelector } from "react-redux";
import AddCartBtn from "../AddCartBtn/AddCartBtn";
import "./ProductList.scss";

const ProductList = () => {
  const products = useSelector((state) => state.product.products);

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
              <AddCartBtn products={product} />
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;
