import React, { FC } from "react";
import { StyledIcon } from "./styles.icon";

export interface ISize {
  width?: number;
  height?: number;
}

interface IIconProps extends ISize {
  src: string;
  alt?: string;
  onClick?: () => void;
}

const Icon: FC<IIconProps> = (props) => {
  const { width, height, src, alt, ...rest } = props;
  return (
    <StyledIcon {...rest} width={width} height={height}>
      <img src={src} alt={`${alt ?? ""}`} />
      <div aria-controls=""></div>
    </StyledIcon>
  );
};

export default Icon;
