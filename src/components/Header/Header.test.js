import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "./Header";


test('Checking Header Text', () => {
  const {rerender} = render(<Header text="Welcome To Home Depot" />)
  expect(screen.getByTestId('heading')).toHaveTextContent('Welcome To Home Depot')

  rerender(<Header text="Home Depot" />)
  expect(screen.getByTestId('heading')).toHaveTextContent('Home Depot')

})

