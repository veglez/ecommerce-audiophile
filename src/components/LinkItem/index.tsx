import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.link.module.scss";

interface ILinkItemProps {
  to: string;
  children: React.ReactNode;
}

const LinkItem: FC<ILinkItemProps> = (props) => {
  const { to, children } = props;
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return isActive ? styles.active2 : undefined;
      }}
    >
      {children}
    </NavLink>
  );
};

export default LinkItem;
