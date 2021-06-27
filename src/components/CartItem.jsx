import { useContext } from 'react';
import { ShopContext } from '../context';

function CartItem({ mainId, displayName, price, quantity }) {
  const { removeFromCart, incQuantity, decQuantity } = useContext(ShopContext);

  return (
    <li className="collection-item">
      {displayName}{' '}
      <i
        className="material-icons cart-quantity text-blue lighten-2"
        onClick={() => incQuantity(mainId)}>
        add
      </i>{' '}
      х{quantity}
      <i className="material-icons cart-quantity" onClick={() => decQuantity(mainId)}>
        remove
      </i>{' '}
      = {price.regularPrice} руб.
      <span className="secondary-content" onClick={() => removeFromCart(mainId)}>
        <i className="material-icons cart-delete">clear</i>
      </span>
    </li>
  );
}

export default CartItem;
