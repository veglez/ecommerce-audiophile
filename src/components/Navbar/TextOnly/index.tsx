/* eslint-disable react/prop-types */
import React from "react";
import { ILinkItemProps } from "../../LinkItem";
import { StyledOnlyTextNavbar } from "./styles.navbar.textonly";
import withNavbar from "@HOC/withNavbar";

const props: ILinkItemProps[] = [
  {
    to: "/",
    children: "Home",
  },
  {
    to: "/category/headphones",
    children: "headphones",
  },
  {
    to: "/category/speakers",
    children: "speakers",
  },
  {
    to: "/category/earphones",
    children: "earphones",
  },
];

export default withNavbar(StyledOnlyTextNavbar, props);
