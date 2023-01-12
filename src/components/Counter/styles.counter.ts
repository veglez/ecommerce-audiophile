import Flex from "@components/UI/Flex";
import styled from "styled-components";

export const Container = styled(Flex)`
  background-color: ${(props) => props.theme.pallete.main.gray};
  padding: 15px 15.5px;
  max-width: 120px;
`;
