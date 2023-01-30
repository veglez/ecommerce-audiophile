import { FC, useState } from "react";
import ReactDOM from "react-dom";
import { withHTMLAttributes } from "types/utilities";
import { Portal, PortalStyles } from "./styles.modal";

interface IModalProps {
  children: React.ReactNode;
  ElementHTML?: HTMLElement;
}

const Modal: FC<withHTMLAttributes<IModalProps> & PortalStyles> = (props) => {
  const {
    children,
    isVisible,
    ElementHTML = document.getElementById("modal"),
    padding = 24,
    ...rest
  } = props;

  return ReactDOM.createPortal(
    <Portal isVisible={isVisible} padding={padding} {...rest}>
      {children}
    </Portal>,
    ElementHTML as HTMLElement
  );
};

export default Modal;
