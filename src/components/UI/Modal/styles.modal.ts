import styled from "styled-components";

export type PortalStyles = {
  isVisible: boolean;
  padding?: number;
};

export const Portal = styled.div<PortalStyles>`
  position: absolute;
  top: 93px;
  right: ${(props) => (props.isVisible ? 0 : "100vw")};
  transition: all 0.5s;
  display: grid;
  place-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(
    ${({ theme }) => theme.pallete.neutral.black.slice(1).split("").join(",")},
    0.4
  );
  padding: ${(props) => props.padding}px;
`;
