import React, { Component } from "react";
import CartProduct from "./CartProduct";

export default class CartProductList extends Component {
  render() {
    return (
      <div>
        <h1>Cart Products</h1>
        <CartProduct />
      </div>
    );
  }
}
