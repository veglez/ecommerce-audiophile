import GoBack from "@components/Button/GoBack";
import ComponentBased from "@components/Navbar/ComponentBased";
import Flex from "@components/UI/Flex";
import styled from "styled-components";

export const Container = styled(Flex)`
  padding: 16px 24px;
`;

export const BackButtonStyled = styled(GoBack)`
  align-self: flex-start;
  margin-block-end: -96px;
`;

export const Navbar = styled(ComponentBased)`
  background-color: ${({ theme }) => theme.pallete.hover.gray};
`;
