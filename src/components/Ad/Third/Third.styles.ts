import Flex from "@components/UI/Flex";
import styled from "styled-components";

export const Main = styled(Flex)`
  padding: 40px 24px;
  background-color: ${(props) => props.theme.pallete.main.gray};
  border-radius: 8px;
`;

export const Container = styled(Flex)`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: stretch;
  }
`;
