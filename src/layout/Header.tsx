import React from "react";
import Navbar from "../components/Navbar";
import logo from "../statics/assets/shared/desktop/logo.svg";

const Header = () => {
  return (
    <header>
      <picture style={{ border: "1px solid red", background: "red" }}>
        <img src={logo} alt="Logo" />
      </picture>

      <Navbar />
      <div>Icon shopping cart</div>
    </header>
  );
};

export default Header;
