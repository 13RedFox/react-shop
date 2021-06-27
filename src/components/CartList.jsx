import React from 'react';
import CartItem from './CartItem';

function CartList({
  order = [],
  handelCartShow = Function.prototype,
  removeFrom = Function.prototype,
  incQuantity,
  decQuantity,
}) {
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.regularPrice * el.quantity;
  }, 0);

  return (
    <ul className="collection cart-list ">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => {
          return (
            <CartItem
              key={item.mainId}
              {...item}
              removeFrom={removeFrom}
              incQuantity={incQuantity}
              decQuantity={decQuantity}
            />
          );
        })
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
      <i className="material-icons cart-close" onClick={handelCartShow}>
        clear
      </i>
    </ul>
  );
}

export default CartList;
