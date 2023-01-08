import React from "react";
import CardNavigationLink, {
  ICardNavigationLinkProps,
} from "components/CardNavigationLink";
import headphone from "@images/menu/headphone.png";
import speaker from "@images/menu/speaker.png";
import earphone from "@images/menu/earphone.png";
import { ILinkItemProps } from "@components/LinkItem";
import { StyledComponentBasedNavbar } from "./styles.navbar.componentbased";
import withNavbar from "@HOC/withNavbar";

const CardsProps: ICardNavigationLinkProps[] = [
  {
    title: "headphones",
    image: headphone,
  },
  {
    title: "speakers",
    image: speaker,
  },
  {
    title: "earphone",
    image: earphone,
  },
];

const Elements: React.ReactElement[] = CardsProps.map((props) => (
  <CardNavigationLink key={props.title} {...props} />
));

const LinksProps: ILinkItemProps[] = [
  {
    to: "/category/headphones",
  },
  {
    to: "/category/speakers",
  },
  {
    to: "/category/earphones",
  },
];

const Links: ILinkItemProps[] = LinksProps.map((item, i) => {
  return {
    ...item,
    children: Elements[i],
  };
});

export default withNavbar(StyledComponentBasedNavbar, Links, {
  styleOnActive: false,
});
