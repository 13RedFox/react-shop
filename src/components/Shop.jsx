import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import CartList from './CartList';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setIsCartShow] = useState(false);

  const addToCart = (item) => {
    const itemIdx = order.findIndex((orderItem) => orderItem.id === item.mainId);

    if (itemIdx === -1) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, idx) => {
        if (idx === itemIdx) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
  };

  const removeFrom = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });

    setOrder(newOrder);
  };

  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });

    setOrder(newOrder);
  };

  const handelCartShow = () => {
    setIsCartShow(!isCartShow);
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handelCartShow={handelCartShow} />
      {loading ? <Preloader /> : <GoodsList goods={goods} addToCart={addToCart} />}
      {isCartShow && (
        <CartList
          order={order}
          handelCartShow={handelCartShow}
          removeFrom={removeFrom}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
    </main>
  );
}

export default Shop;
