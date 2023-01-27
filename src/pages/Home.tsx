import React from "react";
import Ad from "@components/Ad/Base";
import Hero from "@components/Card/Hero";
import ComponentBased from "@components/Navbar/ComponentBased";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import ProductBGOrange from "@components/Ad/ProductBGOrange";
import AdSimpleProduct from "@components/Ad/SimpleProduct";

const Home = () => {
  const state = useSelector((state: RootState) => state.products);
  const xx99 = state.products.find((item) => item.id === 4);

  return (
    <div>
      <Hero {...(xx99 as API.Product)} />
      <ProductBGOrange />
      <AdSimpleProduct />
      <ComponentBased />
      <Ad />
    </div>
  );
};

export default Home;
