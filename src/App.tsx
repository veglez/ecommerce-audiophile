import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
// import Chevron from "./statics/icons/chevronRight.svg";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
