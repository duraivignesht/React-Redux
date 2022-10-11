import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import  Price  from "./Price";


test('Checking Price', () => {
  const data = {
    price:100
  }
  const {rerender} = render(<Price product={data} />)
  expect(screen.getByTestId('pricedata')).toHaveTextContent(100)

})

