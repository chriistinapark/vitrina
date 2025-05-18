import React from 'react';
import { BasketItem } from './BasketItem';

export function BasketList({
  order = [],
  handleBasketShow = Function.prototype,
  removeFromBasket = Function.prototype,
  incQuantity = Function.prototype,
  decQuantity = Function.prototype,
}) {
  const totalPrice = order.reduce((sum, el) => sum + el.price * el.quantity, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item deep-purple white-text">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item deep-purple lighten-4">
        Общая стоимость: {totalPrice} ₽
      </li>
      <li className="collection-item center">
        <button className="btn deep-purple lighten-1" onClick={handleBasketShow}>
          Закрыть
        </button>
      </li>
    </ul>
  );
}