
import React from 'react';

export function GoodsItem(props) {
  const {
    mainId: id,
    displayName: name,
    price: { finalPrice: price } = {},
    displayAssets = [],
    addToBasket = Function.prototype,
  } = props;

  
  const img = displayAssets.length
    ? displayAssets[0].url
    : 'https://via.placeholder.com/300x300?text=No+image';

  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt={name} />
      </div>

      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>Цена: {price}</p>
      </div>

      <div className="card-action">
        <button
          className="btn deep-purple lighten-1"
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
              img,        
            })
          }
        >
          Купить
        </button>
      </div>
    </div>
  );
}
