import React from "react";
import Ad from "@components/Ad/Base";
import Hero from "@components/Card/Hero";
import ComponentBased from "@components/Navbar/ComponentBased";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import ProductBGOrange from "@components/Ad/ProductBGOrange";
import AdSimpleProduct from "@components/Ad/SimpleProduct";
import Third from "@components/Ad/Third";
import Flex from "@components/UI/Flex";

const Home = () => {
  const state = useSelector((state: RootState) => state.products);
  const xx99 = state.products.find((item) => item.id === 4);

  return (
    <div>
      <Hero {...(xx99 as API.Product)} />
      <Flex
        direction="column"
        gap={120}
        style={{ padding: "40px 24px", background: "white" }}
      >
        <ComponentBased />
        <Flex direction="column" gap={24}>
          <ProductBGOrange />
          <AdSimpleProduct />
          <Third name="YX1 EARPHONES" />
        </Flex>
        <Ad style={{ marginBlockEnd: "80px" }} />
      </Flex>
    </div>
  );
};

export default Home;
