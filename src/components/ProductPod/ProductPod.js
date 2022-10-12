import React, { useContext, Suspense } from 'react';
import Price  from '../Price/Price';
import { ProductImage } from '../ProductImage/ProductImage';
import './ProductPod.scss'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { context } from '../../context/context';
import { trigger } from "../../utils/events";
import { useDispatch,useSelector } from 'react-redux';
import { modalOpen,setProduct } from '../../store/cartSlice';


const Modal = React.lazy(()=>import('../Modal/Modal'))

export const ProductPod = ({ product }) => {

  const dispatch = useDispatch();
  const handlemodalOpen = (data)=>{
    dispatch(modalOpen(data))
  }
  const getProduct = (data)=>{
    dispatch(setProduct(data))
  }
  const openModal = useSelector((state)=>state.cart.openModal)
  const prod = useSelector((state)=>state.cart.product)
 // const {prod,setProd} = useContext(context);
  
  // const event = new CustomEvent("start", {
  //   detail: product
  // });
  if (!product) return null;
  return (
    <article className='product-pod' key={product.id} >
      {/* TODO: make DRY with a ProductImage component */}
    
      <Link to={`/productdetail/${product.id}`} onClick={()=>{trigger("start",product)}} >
        <ProductImage img={{url:product.image,title:'Home Depot logo'}} />
        {product.brand && 
          <div data-testid="brand">
            {product.brand}
          </div> 
          }
        {product.description && 
          <div data-testid={`desc-${product.id}`}>
          {product.description}
        </div> 
        } 
        <Price product={product} />
      </Link>
      <Button onClick={() => { handlemodalOpen(true); getProduct(product);trigger("start",product)}} children="Add TO Cart" className="btn" />
      {
          openModal && (
            <Suspense fallback="Loading...">
              <Modal productDetail={prod} open={openModal} onClose={() => handlemodalOpen(false)}  />
            </Suspense>
          )
      }
      {/* <CartButton product={product} /> */}
    </article>
  );
};

ProductPod.propTypes = {
  product:PropTypes.shape({
    image:PropTypes.string,
    brand:PropTypes.string,
    description:PropTypes.string,
    price:PropTypes.number
  }),
  handleClick:PropTypes.func
}
