/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useState } from "react";
import Logo from "../../statics/assets/shared/desktop/logo.svg";
import Cart from "@images/shared/desktop/icon-cart.svg";
import BurguerIcon from "@images/shared/tablet/icon-hamburger.svg";
import { Icon } from "@components/Icon";
import { StyledHeader, Wrapper } from "./styles.header";
import ComponentBased from "@components/Navbar/ComponentBased";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((previousState) => !previousState);
  };

  return (
    <>
      <StyledHeader>
        <Icon src={BurguerIcon} alt="menu icon" onClick={handleToggleMenu} />
        <Icon src={Logo} alt="Logo icon" width={123} height={25} />
        {/* <Navbar /> */}
        <Icon src={Cart} width={23} />
      </StyledHeader>
      <Wrapper isOpen={isOpen}>
        <ComponentBased />
      </Wrapper>
    </>
  );
};

export default Header;
