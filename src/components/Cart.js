import React, { Component } from "react";
import CartProductList from "./CartProductList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
  render() {
    return (
      <div className="wrapper cart">
        <CartProductList />
        <CartSummary />
      </div>
    );
  }
}
