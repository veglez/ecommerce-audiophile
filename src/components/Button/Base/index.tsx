import React, { FC } from "react";
import { withHTMLAttributes } from "types/utilities";
import { ButtonStyled } from "./styles.button";

export type IButtonProps =
  | {
      text: string;
      type: "filled" | "outlined";
      Icon?: never;
    }
  | {
      text: string;
      type: "withIcon";
      Icon: React.ReactNode;
    };

const Button: FC<withHTMLAttributes<IButtonProps>> = (props) => {
  const { text, type, Icon, ...rest } = props;

  return (
    <ButtonStyled innerType={type} {...rest}>
      <span className="button__text">{text}</span>
      {Icon && Icon}
    </ButtonStyled>
  );
};

export default Button;
