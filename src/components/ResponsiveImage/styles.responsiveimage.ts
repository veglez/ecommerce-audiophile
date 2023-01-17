import styled from "styled-components";

export interface IPictureStylesProps {
  maxWidth: number;
  borderRadius: number;
}

export const Picture = styled.picture<IPictureStylesProps>`
  width: 100%;
  max-width: ${(props) => props.maxWidth}px;
  border-radius: ${(props) => props.borderRadius}px;
  overflow: hidden;
`;
