import React from 'react';

function GoodsItem({
  mainId,
  displayName,
  granted,
  price,
  displayAssets,
  addToCart = Function.prototype,
}) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={granted.description} />
      </div>
      <div className="card-content descr">
        <span className="card-title title">{displayName}</span>
        <p>{granted[0].description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn blue lighten-2"
          onClick={() =>
            addToCart({
              mainId,
              displayName,
              price,
            })
          }>
          Купить
        </button>
        <span className="right">{price.regularPrice} руб.</span>
      </div>
    </div>
  );
}

export default GoodsItem;
