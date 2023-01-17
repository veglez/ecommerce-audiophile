import Button from "@components/Button";
import { RootState } from "@redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const state = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <h1>Home</h1>

      <p>En el carrito de compras se encuentran los siguientes productos:</p>

      {state.products.map((item) => {
        return <p key={item.product.id}>{item.product.name}</p>;
      })}

      <Link to={"/product-details"}>
        <Button text="Ir a productos" type="filled" />{" "}
      </Link>
    </div>
  );
};

export default Home;
