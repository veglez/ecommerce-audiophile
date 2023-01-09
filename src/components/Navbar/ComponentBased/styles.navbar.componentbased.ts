import styled from "styled-components";
import { StyledNavbar } from "../styles.navbar.common";

export const StyledComponentBasedNavbar = styled(StyledNavbar)`
  flex-direction: column;
  gap: 16px;

  /* @media screen and (min-width: ${(props) =>
    props.theme.breakpoints.tablet}px) {
    flex-direction: row;
  } */
`;
