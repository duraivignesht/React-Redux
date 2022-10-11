import React, {useContext} from 'react';
import './Modal.scss';
//import { context } from '../../context/context';
// import { CartButton } from '../Cart/CartButton';
import { add,success } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
const Price = React.lazy(()=>import('../Price/Price'))
const Button = React.lazy(()=>import('../Button/Button'))

const Modal = ({ productDetail, open, onClose }) => {
  //const { addProductToCart } = useContext(context);
  const dispatch =  useDispatch()
  const handleAddToCart = (product)=>{
    dispatch(add(product))
    setTimeout(() => {
      dispatch(success(false))
    }, 1000)
  }
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
                <h2>{productDetail?.brand}</h2>
                <p>{productDetail?.description}</p>
                <Price product={productDetail} />
          </div>
          <div className='btnContainer'>
            <Button onClick={() => handleAddToCart(productDetail)} children="Add TO Cart" className="btn" />
            <Button onClick={onClose} children="Close" className="btnOutline" />            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;