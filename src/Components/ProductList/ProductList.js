import React from "react";
import CartDispatchContainer from "../../Containers/CartDispatchContainer/CartDispatchContainer";
import "./ProductList.scss";
import cartIcon from "../../Images/cart-icon.png";

const ProductList = (props) => {
  const { products, addCart, setCount } = props;
  console.log(products);

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
