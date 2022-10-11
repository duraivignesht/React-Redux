import React, { useState, useReducer } from "react";
import { context } from '../context/context';

const GlobalState = (props) => {

  const [openModal, setOpenModal] = useState(false);
  const [openMsg, setMsgModal] = useState(false);
  const [prod,setProd] = useState({});
  const ADD_PRODUCT = "ADD_PRODUCT";

  const shopReducer = (state, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        return addProductToCarts(action.product, state);
      default:
        return state;
    }
  };

  const addProductToCarts = (product, state) => {
      const updatedCart = [...state.cart];
      updatedCart.push({ ...product});
      setOpenModal(false)
      setMsgModal(true)
      setTimeout(()=>{ setMsgModal(false) },1000)
      return { ...state, cart: updatedCart };
  };
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  

  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };
  return (
    <context.Provider
      value={{
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        openModal,
        setOpenModal,
        openMsg,
        setMsgModal,
        prod,
        setProd
      }}
    >
      {props.children}
    </context.Provider>
  );
}
export default GlobalState