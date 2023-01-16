import React, { useState } from "react";
import Logo from "../../statics/assets/shared/desktop/logo.svg";
import CartIcon from "@images/shared/desktop/icon-cart.svg";
import BurguerIcon from "@images/shared/tablet/icon-hamburger.svg";
import BaseIcon from "@components/Icon/BaseIcon";
import { StyledHeader, LinkLogo } from "./styles.header";
import ComponentBased from "@components/Navbar/ComponentBased";
import useViewportMatchSize from "@hooks/useViewportMatchSize";
import TextNavbar from "@components/Navbar/TextOnly";
import FloatingNumber from "@components/Icon/FloatingNumber";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import Modal from "@components/UI/Modal";
import Cart from "@components/Cart";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const matchViewport = useViewportMatchSize("768px");

  const handleToggleMenu = () => {
    setIsOpen((previousState) => !previousState);
  };

  const handleToggleCart = () => {
    setIsCartOpen((previousState) => !previousState);
  };

  const state = useSelector((state: RootState) => state.cart);

  return (
    <>
      <StyledHeader>
        {matchViewport && (
          <BaseIcon
            src={BurguerIcon}
            alt="menu icon"
            onClick={handleToggleMenu}
          />
        )}
        <LinkLogo to="/">
          <BaseIcon src={Logo} alt="Logo icon" width={123} height={25} />
        </LinkLogo>
        {!matchViewport && <TextNavbar />}
        <FloatingNumber
          onClick={handleToggleCart}
          number={state.totalItems}
          src={CartIcon}
          width={23}
        />
      </StyledHeader>

      {matchViewport && (
        <Modal isVisible={isOpen}>
          <ComponentBased onClick={() => setIsOpen(false)} />
        </Modal>
      )}
      <Modal isVisible={isCartOpen}>
        <Cart />
      </Modal>
    </>
  );
};

export default Header;
