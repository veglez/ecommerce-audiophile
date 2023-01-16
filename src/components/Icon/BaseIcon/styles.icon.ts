import styled from "styled-components";
import { ISize } from ".";

export const StyledIcon = styled.picture.attrs<ISize>((props) => {
  return {
    width: props.width || 20,
    height: props.height || 20,
  };
})<ISize>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
