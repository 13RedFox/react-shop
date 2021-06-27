import React from 'react';

function Cart({ quantity = 0, handelCartShow = Function.prototype }) {
  return (
    <div className="cart blue lighten-2 white-text" onClick={handelCartShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity ">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
