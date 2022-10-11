import React, { useState, useCallback } from 'react';
import './App.css';
import { Header } from './components/Header/Header'
import { ProductGrid } from './components/ProductGrid/ProductGrid';
// import { ProductPreview } from './components/ProductPreview/ProductPreview';
import { CartMessage } from './components/Cart/CartMessage';
import MainNavigation from './components/MainNavigation'

export const Home = ({datas}) => {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const getProductPreview = useCallback((val) => {
    setSelectedProduct(val);
  },[]);

  return (
    <>
      {/* <CartHeader /> */}
      <MainNavigation />
      <CartMessage />
      <Header text={datas?.headerText} />
      <ProductGrid products={datas?.products} handleClick={getProductPreview} />
      {/* <ProductPreview key={selectedProduct?.description} product={selectedProduct} /> */}
    </>
  );
}

