import React from 'react';
import './Modal.scss';
// import { CartButton } from '../Cart/CartButton';
const MessageModal = ({ product, open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalMsgContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
                <h2>Product Added To Cart Successfully</h2>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MessageModal;