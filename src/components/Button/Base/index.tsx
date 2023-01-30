import React, { FC } from "react";
import { withHTMLAttributes } from "types/utilities";
import { ButtonStyled } from "./styles.button";

export type IButtonProps =
  | {
      text: string;
      variant: "filled" | "outlined";
      Icon?: never;
    }
  | {
      text: string;
      variant: "withIcon";
      Icon: React.ReactNode;
    };

const Button: FC<
  IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const { text, variant, Icon, ...rest } = props;

  return (
    <ButtonStyled innerType={variant} {...rest}>
      <span className="button__text">{text}</span>
      {Icon && Icon}
    </ButtonStyled>
  );
};

export default Button;
