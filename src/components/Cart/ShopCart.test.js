import React from "react";
import { render, screen } from "@testing-library/react";
import { context } from '../../context/context';
import { ShopCart } from "./ShopCart";
import {BrowserRouter as Router} from 'react-router-dom';

test('Checking Cart', () => {
  const product =  [{
  id:1,image: '/product1.jpg',
  price: 55,
  description: 'Drill',
  brand: 'DeWalt'
}]
  const prod = { cart: product };
  render(
    <context.Provider value={prod}>
      <Router><ShopCart /></Router>
    </context.Provider>
  );

  const image = screen.getByTestId('img-1');
  expect(image).toHaveAttribute('src', '/product1.jpg');
  
  const getBrand = screen.getByTestId('brand-1');
  expect(getBrand).toBeInTheDocument();
  expect(getBrand).toHaveTextContent('DeWalt');

  const getDescription = screen.getByTestId('desc-1');
  expect(getDescription).toBeInTheDocument();
  expect(getDescription).toHaveTextContent('Drill');

  const getPrice = screen.getByTestId('price-1');
  expect(getPrice).toBeInTheDocument();
  expect(getPrice).toHaveTextContent('55');
})


