import React from "react";
import "./styles/globals.scss";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Header from "./layout/Header";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import CardNavigationLink from "components/CardNavigationLink";
import Image from "@images/shared/mobile/image-xx99-mark-one-headphones.jpg";
import Image2 from "@images/shared/mobile/image-zx9-speaker.jpg";
import Image3 from "@images/product-yx1-earphones/mobile/image-category-page-preview.jpg";

const App = () => {
  return (
    <div>
      <Header />
      <CardNavigationLink title="Headphones" image={Image} />
      <CardNavigationLink title="Speakers" image={Image2} />
      <CardNavigationLink title="Earphones" image={Image3} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
