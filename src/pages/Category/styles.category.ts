import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import styled from "styled-components";

export const Title = styled(Typography)`
  color: ${(props) => props.theme.pallete.neutral.white};
  background-color: ${(props) => props.theme.pallete.neutral.black};
  padding: 32px 84px;
`;

export const Container = styled(Flex)`
  padding: 64px 24px;
`;
