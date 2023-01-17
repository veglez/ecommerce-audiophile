import Flex from "@components/UI/Flex";
import styled from "styled-components";

export const Container = styled(Flex)`
  background-color: ${(props) => props.theme.pallete.neutral.white};
  padding: 32px 24px;
  border-radius: 8px;
`;
