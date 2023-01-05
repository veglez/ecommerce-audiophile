import React from "react";
// import { Link } from "react-router-dom";
import LinkItem from "../LinkItem";
import { StyledNavbar } from "./styles.navbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <LinkItem to={"/"}>Home</LinkItem>
      <LinkItem to={"/category/headphones"}>headphones</LinkItem>
      <LinkItem to={"/category/speakers"}>speakers</LinkItem>
      <LinkItem to={"/category/earphones"}>earphones</LinkItem>
    </StyledNavbar>
  );
};

export default Navbar;
