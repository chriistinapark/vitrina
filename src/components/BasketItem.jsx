import React from 'react';

export function BasketItem({
  id,
  name,
  price,
  quantity,
  removeFromBasket = Function.prototype,
  incQuantity = Function.prototype,
  decQuantity = Function.prototype,
}) {
  return (
    <li className="collection-item basket-item">
      <span className="item-name">{name}</span>

      <span className="qty-control">
        <i className="material-icons" onClick={() => decQuantity(id)}>remove</i>
        <span className="qty">{quantity}</span>
        <i className="material-icons" onClick={() => incQuantity(id)}>add</i>
      </span>

      <span className="item-price">{price * quantity} ₽</span>

      {}
      <i className="material-icons delete-icon" onClick={() => removeFromBasket(id)}>
        close
      </i>
    </li>
  );
}

