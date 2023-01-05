import React from "react";
import LinkItem from "./LinkItem";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <LinkItem to="/">Home</LinkItem>
        </li>
        <li>
          <LinkItem to="/category">Category</LinkItem>
        </li>
        <li>
          <LinkItem to="/product-details">Product details</LinkItem>
        </li>
        <li>
          <LinkItem to="/cart">Cart</LinkItem>
        </li>
        <li>
          <LinkItem to="/checkout">Checkout</LinkItem>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
