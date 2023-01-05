import React from "react";
import Navbar from "../../components/Navbar";
import Logo from "../../statics/assets/shared/desktop/logo.svg";

const Header = () => {
  return (
    <header>
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
      <Navbar />
      <p>Icon carrito de compras</p>
    </header>
  );
};

export default Header;
