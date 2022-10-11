import React,{useCallback} from 'react';
import { ProductPod } from '../ProductPod/ProductPod';
import './ProductGrid.scss';
import PropTypes from 'prop-types';

export const ProductGrid = ({ products }) => {
  if (!products?.length) return null;
  return (
    <article className='product-grid'>
    {
      products.map((products,index)=>
      {
      return  ( <ProductPod key={"prod"+index} product={products} />
      )
    }
      )
    }
      {/* TODO: Render a ProductPod for each product */}
    </article>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.array,
  // handleClick:PropTypes.func
}