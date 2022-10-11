import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import  Button from "./Button";


test('Checking Button', () => {
  const {getByText} = render(<Button children="Add TO Cart" />)
  expect(getByText('Add TO Cart')).toBeInTheDocument();
})

