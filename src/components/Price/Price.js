import React, { useEffect, useState } from 'react';

import './Price.scss'

import { slowTransformation } from '../../helpers';
import { slowApi } from '../../api';

  const Price = ({ product, showSpecialPrice = false }) => {
  const [specialPrice, setSpecialPrice] = useState(product?.price);

  const wasPrice = slowTransformation(product?.price);
  const nowPrice = showSpecialPrice ? slowTransformation(specialPrice) : slowTransformation(product?.price);
  useEffect(() => {
    if (product) {
      function fetchSpecialPrice() {
        // TODO: get data from slowApi (argument product.price)
        slowApi(product.price).then((data)=>setSpecialPrice(data))
      }
      fetchSpecialPrice();
    }
  }, [product]);

  const hasDiscount = specialPrice !== product.price;

  return (
    <article className="product-price">
      <section className="price-wrapper">
        <span className="price">
          <span className="price--superscript">$</span>
          <span data-testid="pricedata">{nowPrice.dollars}</span>
          <span  className="price--superscript">{nowPrice.cents}</span>
        </span>
        {(showSpecialPrice && hasDiscount) && <>&nbsp;<span className="price--strikethrough">{'$' +wasPrice.dollars + '.' + wasPrice.cents}</span></>}
      </section>
    </article>
  );
};

export default Price;