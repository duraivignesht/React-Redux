import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { context } from "../context/context";
import "./MainNavigation.css";
import { useSelector } from 'react-redux'

const MainNavigation = () => {
 const items = useSelector((state)=>state.cart.products)
 const { cart } = useContext(context)
console.log(items)
 return(
  <>
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart ({items.length})</NavLink>
        </li>
      </ul>
    </nav>
  </header>
  </>
  )
  }
export default MainNavigation;

