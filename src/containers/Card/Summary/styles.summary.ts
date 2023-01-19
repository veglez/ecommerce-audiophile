import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import styled from "styled-components";

export const TypographyStyled = styled(Typography)<{ isOrange: boolean }>`
  color: ${(props) =>
    props.isOrange
      ? props.theme.pallete.main.orange
      : props.theme.pallete.neutral.black};
  text-transform: uppercase;
`;

export const Container = styled(Flex)`
  padding: 32px 24px;
`;
