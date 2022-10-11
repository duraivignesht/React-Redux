import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ProductImage } from "./ProductImage";


test('Checking Product Image', () => {
  const data = {url:"/product1.jpg",title:'Product 1'}
  render(<ProductImage img={data} />)
  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', '/product1.jpg');
  expect(image).toHaveAttribute('alt', 'Product 1');

})

