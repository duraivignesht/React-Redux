import React, { useState, useEffect, useContext } from 'react';
import  Price from '../Price/Price';
import './ProductPreview.scss'
import { ProductImage } from '../ProductImage/ProductImage';
import { useParams } from "react-router-dom";
import { CartMessage } from '../Cart/CartMessage';
import Button from '../Button/Button';
//import { context } from '../../context/context';
import MainNavigation from '../MainNavigation'
import { add,success } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

export const ProductPreviewDetail = ({ singleProduct }) => {
    let { id } = useParams();
    const [product, setProductdetail] = useState({});
   // const { addProductToCart } = useContext(context);
    const dispatch =  useDispatch()

    useEffect(() => {
        const getDetails = singleProduct?.map((item)=>{ 
            if(item.id==id)
            {
            setProductdetail(item);
            } 
        })
      }, [singleProduct,id]);

    const [showSpecialPrice, setshowSpecialPrice] = useState({
    showSpecialPrice: false
    });
    const handleAddToCart = (product)=>{
      dispatch(add(product))
      setTimeout(() => {
        dispatch(success(false))
      }, 1000)
    }
if (!product) return null;
  return (
    <>
    <MainNavigation />
    <CartMessage />
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
        <Button onClick={() => handleAddToCart(product)} children="Add TO Cart" className="btn" />
      </aside>
    </article>
    </>
  )
};
