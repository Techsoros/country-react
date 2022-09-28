import React from "react";
import { addToDb } from "../Utilites/localDb";
import "./Product.css";

const Product = (props) => {
  const { id, name, price, picture } = props.product;

  const addToCart = (id) => {
    addToDb(id);
  };

  return (
    <div className="product-card">
      <img src={picture} alt="" width="100%" className="card-img" />
      <div className="product-card-body">
        <p>Id : {id}</p>
        <h2>{name}</h2>
        <h3>Price : {price} </h3>
        <button className="buy-btn" onClick={() => addToCart(id)}>
          Add to Cart
        </button>
        <button className="buy-btn" onClick={() => addToCart(id)}>
          Remove the Item
        </button>
      </div>
    </div>
  );
};

export default Product;
