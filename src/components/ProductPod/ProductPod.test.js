import { render, waitFor, screen } from "@testing-library/react";
import { ProductPod } from "./ProductPod";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import {BrowserRouter as Router} from 'react-router-dom';

jest.mock("axios");

const product =
    {
      id:1,image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1020px-TheHomeDepot.svg.png',
      price: 55,
      description: 'Drill',
      brand: 'DeWalt'
    };

test("product list", async () => {
axios.get.mockResolvedValue({ product: product });
const {findAllByTestId, getByText} = render(<Router><ProductPod product={product} /></Router>);

const prodList = await waitFor(() => findAllByTestId("brand"));
const itemToLookFor = getByText(/DeWalt/i);
expect(itemToLookFor).toBeInTheDocument();
expect(prodList).toHaveLength(1);
}); 



