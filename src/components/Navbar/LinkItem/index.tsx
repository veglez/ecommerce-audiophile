import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "./styles.linkitem";

interface ILinkItemProps {
  to: string;
  children?: React.ReactNode;
}

const LinkItem: FC<ILinkItemProps> = (props) => {
  const { children, to } = props;
  return (
    <NavLink
      className={({ isActive }) => {
        console.log({ isActive });
        return isActive ? "main-active" : undefined;
      }}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default LinkItem;
