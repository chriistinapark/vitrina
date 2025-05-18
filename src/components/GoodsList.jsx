import React from 'react';
import { GoodsItem } from './GoodsItem';

export function GoodsList({ goods = [], addToBasket }) {
  if (!goods.length) {
    return <h5>Ничего не найдено</h5>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
}