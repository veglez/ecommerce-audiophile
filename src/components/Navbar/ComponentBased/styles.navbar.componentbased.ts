import styled from "styled-components";
import { StyledNavbar } from "../styles.navbar.common";

export const StyledComponentBasedNavbar = styled(StyledNavbar)`
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: ${({ theme }) => theme.pallete.neutral.white};
  padding: 32px 24px;
  width: 100%;

  & a {
    width: 100%;
    max-width: 375px;
  }
`;
