import React, { useState, useCallback, Profiler } from 'react';
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
  const callback = (id, phase, actualDuration, startTime, 
    baseDuration, commitTime, interactions) => {
    console.log(
      "id " + id + 
      " startTime " + startTime + 
      " actualDuration " + actualDuration + 
      " baseDuration " + baseDuration + 
      " commitTime " + commitTime + 
      " phase " + phase + 
      " interactions " + interactions
    );
}
  
  return (
    <>
      {/* <CartHeader /> */}
      <Profiler id='Navigation' onRender={callback} >
      <MainNavigation />
      </Profiler>
      <Profiler id='CartMessage' onRender={callback} >
      <CartMessage />
      </Profiler>
      <Profiler id='Header' onRender={callback} >
      <Header text={datas?.headerText} />
      </Profiler>
      <Profiler id='ProductGrid' onRender={callback} >
      <ProductGrid products={datas?.products} handleClick={getProductPreview} />
      </Profiler>
      {/* <ProductPreview key={selectedProduct?.description} product={selectedProduct} /> */}
    </>
  );
}

