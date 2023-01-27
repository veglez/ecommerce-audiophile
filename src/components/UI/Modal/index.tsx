import { FC, useState } from "react";
import ReactDOM from "react-dom";
import { withHTMLAttributes } from "types/utilities";
import { Portal } from "./styles.modal";

interface IModalProps {
  children: React.ReactNode;
  ElementHTML?: HTMLElement;
  isVisible: boolean;
}

const Modal: FC<withHTMLAttributes<IModalProps>> = (props) => {
  const {
    children,
    isVisible,
    ElementHTML = document.getElementById("modal"),
    ...rest
  } = props;

  return ReactDOM.createPortal(
    <Portal isVisible={isVisible} {...rest}>
      {children}
    </Portal>,
    ElementHTML as HTMLElement
  );
};

export default Modal;
