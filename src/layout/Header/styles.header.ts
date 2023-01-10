import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.pallete.main.black};
  padding: 34px 24px;
  color: ${(props) => props.theme.pallete.neutral.white};
  gap: 42px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding-inline: 135px;
  } ;
`;

export const Wrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 93px;
  right: ${(props) => (props.isOpen ? 0 : "100vw")};
  transition: all 0.5s;
  width: 100vw;
  padding: 32px 12px;
  background-color: ${(props) => props.theme.pallete.neutral.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinkLogo = styled(Link)`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-grow: 1;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-grow: initial;
  }
`;
