import React, { useState } from "react";
import Logo from "../../statics/assets/shared/desktop/logo.svg";
import Cart from "@images/shared/desktop/icon-cart.svg";
import BurguerIcon from "@images/shared/tablet/icon-hamburger.svg";
import { Icon } from "@components/Icon";
import { StyledHeader, Wrapper, LinkLogo } from "./styles.header";
import ComponentBased from "@components/Navbar/ComponentBased";
import useViewportMatchSize from "@hooks/useViewportMatchSize";
import TextNavbar from "@components/Navbar/TextOnly";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const matchViewport = useViewportMatchSize("768px");

  const handleToggleMenu = () => {
    setIsOpen((previousState) => !previousState);
  };

  return (
    <>
      <StyledHeader>
        {matchViewport && (
          <Icon src={BurguerIcon} alt="menu icon" onClick={handleToggleMenu} />
        )}
        <LinkLogo to="/">
          <Icon src={Logo} alt="Logo icon" width={123} height={25} />
        </LinkLogo>
        {!matchViewport && <TextNavbar />}
        <Icon src={Cart} width={23} />
      </StyledHeader>
      {matchViewport && (
        <Wrapper isOpen={isOpen}>
          <ComponentBased onClick={() => setIsOpen(false)} />
        </Wrapper>
      )}
    </>
  );
};

export default Header;
