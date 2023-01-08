import React, { FC } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import styles from "./styles.link.module.scss";

export type ILinkItemExtraProps = {
  styleOnActive?: boolean;
  activeClassName?: string;
};

export type ILinkItemProps = NavLinkProps &
  React.RefAttributes<HTMLAnchorElement> &
  ILinkItemExtraProps;

const LinkItem: FC<ILinkItemProps> = (props) => {
  const {
    to,
    children,
    styleOnActive = true,
    activeClassName,
    ...rest
  } = props;
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return styleOnActive && isActive
          ? activeClassName ?? styles.active
          : undefined;
      }}
      {...rest}
    >
      {children}
    </NavLink>
  );
};

export default LinkItem;
