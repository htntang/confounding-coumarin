import React from "react";
import { PRODUCTS } from "../Products/products";
import { Product } from "./Product";
import "./Shop.css";
import logowhite from "../Assets/logo/logowhite.png"

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>The Hell's Belles</h1>
        {/* <img src={logowhite}/> */}
        <p>Your one-stop shop for all your beauty needs.</p>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
