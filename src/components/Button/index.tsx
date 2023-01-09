import React, { FC } from "react";
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

const Button: FC<IButtonProps> = (props) => {
  const { text, type, Icon } = props;

  return (
    <ButtonStyled innerType={type}>
      <span className="button__text">{text}</span>
      {Icon && Icon}
    </ButtonStyled>
  );
};

export default Button;
