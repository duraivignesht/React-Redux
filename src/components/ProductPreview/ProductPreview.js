import React, { useState } from 'react';
import { Price } from '../Price/Price';
import './ProductPreview.scss'
import { ProductImage } from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';

export const ProductPreview = ({ product }) => {
  const [showSpecialPrice, setshowSpecialPrice] = useState({
    showSpecialPrice: false
});
  if (!product) return null;
  return (
    <article className="product-preview">
      {/* TODO: make DRY with a ProductImage component */}
      <div className="prodimg">
      <ProductImage img={{url:product.image,title:'Home Depot logo'}} />
      </div>
      <aside className="product-preview-details">
        {product.brand && 
          <p>
            <b>
              {product.brand}
            </b>
          </p>
        }
        {product.description && 
          <p>
            {product.description}
          </p>
        }
        <p className='prodclick' onClick={()=>setshowSpecialPrice({ showSpecialPrice: true})}>Show Special Price</p>
        <Price product={product} {...showSpecialPrice} />
      </aside>
    </article>
  )
};
ProductPreview.propTypes = {
  product:PropTypes.shape({
    image:PropTypes.string,
    brand:PropTypes.string,
    description:PropTypes.string,
    price:PropTypes.number
  })
}