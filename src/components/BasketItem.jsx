import React from 'react';

export function BasketItem({
  id,
  name,
  price,
  quantity,
  img,
  removeFromBasket = Function.prototype,
  incQuantity = Function.prototype,
  decQuantity = Function.prototype,
}) {
  return (
    <li className="collection-item basket-item">
      {/* мини-картинка */}
      <img src={img} alt={name} className="thumb" />

      {/* название (может быть длинным) */}
      <span className="item-name">{name}</span>

      {/* блок qty */}
      <span className="qty-control">
        <i className="material-icons" onClick={() => decQuantity(id)}>remove</i>
        <span className="qty">{quantity}</span>
        <i className="material-icons" onClick={() => incQuantity(id)}>add</i>
      </span>

      {/* цена */}
      <span className="item-price">{price * quantity} ₽</span>

      {/* крестик удаления */}
      <i
        className="material-icons delete-icon"
        onClick={() => removeFromBasket(id)}
      >
        close
      </i>
    </li>
  );
}


