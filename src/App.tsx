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
import CardNavigation from "@components/Navbar/ComponentBased";
import CardNavigationLink, {
  ICardNavigationLinkProps,
} from "@components/CardNavigationLink";

const props: ICardNavigationLinkProps = {
  title: "Segundo titulo",
  image: "s",
};

const App = () => {
  return (
    <div>
      <Header />

      <CardNavigation />
      <CardNavigationLink {...props} />
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
