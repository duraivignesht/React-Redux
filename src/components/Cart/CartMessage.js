import React, { useContext, Suspense } from "react";
import { Link } from 'react-router-dom';
import { context } from '../../context/context';
import { useSelector,useDispatch } from 'react-redux';
import { success } from '../../store/cartSlice';

const MessageModal = React.lazy(()=>import('../Modal/MessageModal'))

export const CartMessage = () => {
  //const {  openMsg, setMsgModal } = useContext(context);
  const openMsg = useSelector((state)=>state.cart.successMsg);
  const dispatch = useDispatch()
  const handleSuccess = (data) =>
  {
    dispatch(success(data))
  }
  return (
     <>
      {
          openMsg && (
            <Suspense fallback="Loading...">
              <MessageModal open={openMsg} onClose={() => handleSuccess(false)} />
            </Suspense>
          )
      }
     
      
     </>
  );
};
