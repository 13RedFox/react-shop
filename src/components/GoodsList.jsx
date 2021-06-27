import React from 'react';
import GoodsItem from './GoodsItem';

function GoodsList({ goods = [], addToCart = Function.prototype }) {
  if (!goods.length) {
    <h3>Oooooop...Nothing here</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default GoodsList;
