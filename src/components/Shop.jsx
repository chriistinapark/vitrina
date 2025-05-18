import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

export function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        }
        return orderItem;
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };

  const removeFromBasket = (id) => {
    setOrder(order.filter((el) => el.id !== id));
  };

  const incQuantity = (id) => {
    setOrder(order.map((el) => el.id === id ? { ...el, quantity: el.quantity + 1 } : el));
  };

  const decQuantity = (id) => {
    setOrder(order.map((el) => el.id === id ? { ...el, quantity: Math.max(el.quantity - 1, 0) } : el));
  };

  const handleBasketShow = () => setBasketShow(!isBasketShow);

  useEffect(() => {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.shop) setGoods(data.shop);
        setLoading(false);
      });
  }, []);


return (
  <main className="container content">
    <Cart quantity={order.length} handleBasketShow={handleBasketShow} />

    <h4 className="center-align" style={{ margin: '2rem 0 1rem' }}>
      Каталог&nbsp;товаров
    </h4>

    {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}

    {isBasketShow && (
      <BasketList
        order={order}
        handleBasketShow={handleBasketShow}
        removeFromBasket={removeFromBasket}
        incQuantity={incQuantity}
        decQuantity={decQuantity}
      />
    )}

    {alertName && <Alert name={alertName} closeAlert={() => setAlertName('')} />}
  </main>
);
}
