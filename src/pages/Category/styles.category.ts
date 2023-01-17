import Typography from "@components/Typography";
import styled from "styled-components";

export const Title = styled(Typography)`
  color: ${(props) => props.theme.pallete.neutral.white};
  background-color: ${(props) => props.theme.pallete.neutral.black};
  padding: 32px 84px;
`;
