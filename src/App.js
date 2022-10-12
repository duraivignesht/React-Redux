import React, {useEffect,useState} from 'react';
import './App.css';
import { Home } from './Home'
import { ProductPreviewDetail } from './components/ProductPreview/ProductPreviewDetail';
import {Routes, Route} from "react-router-dom";
import { getProducts } from './api';
import { ShopCart } from './components/Cart/ShopCart';
// import GlobalState from './reducer/GlobalState';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getProducts().then(
    	(data)=>setData(data)
    )
},[]);

  return (
    <div className="App">
            {/* {ProductList && ProductList?.map((e,index) => <p key={index}>{e.id}</p>)} */}
    {/* <GlobalState> */}
      <Routes>
        <Route path="/" exact element={<Home datas={data} />} />
        <Route path="/productdetail/:id" exact element={<ProductPreviewDetail singleProduct={data?.products} />} />
        <Route path="/cart" exact element={<ShopCart />} />
      </Routes>
    {/* </GlobalState> */}
    </div>
  );
}

export default App; 
