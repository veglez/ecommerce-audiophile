import React, { FC } from "react";
import { ButtonStyled } from "./styles.button";

export interface IButtonProps {
  text: string;
  type: "filled" | "outlined";
  Icon?: React.ReactNode;
}

const Button: FC<IButtonProps> = (props) => {
  const { text, type, Icon } = props;
  const innerType = Icon ? "withIcon" : type;
  return (
    <ButtonStyled innerType={innerType}>
      <span className="button__text">{text}</span>
      {Icon && Icon}
    </ButtonStyled>
  );
};

export default Button;
