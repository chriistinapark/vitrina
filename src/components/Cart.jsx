import React from 'react';

export function Cart({ quantity = 0, handleBasketShow = Function.prototype }) {
  return (
    <div className="cart" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}