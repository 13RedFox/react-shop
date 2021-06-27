import { useContext } from 'react';
import { ShopContext } from '../context';
import CartItem from './CartItem';

function CartList() {
  const { order = [], handelCartShow = Function.prototype } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.regularPrice * el.quantity;
  }, 0);

  return (
    <ul className="collection cart-list ">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => {
          return <CartItem key={item.mainId} {...item} />;
        })
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
      <li className="collection-item active">
        <button className="btn btn-small">Оформить</button>
      </li>
      <i className="material-icons cart-close" onClick={handelCartShow}>
        clear
      </i>
    </ul>
  );
}

export default CartList;
