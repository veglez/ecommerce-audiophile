import Typography from "@components/Typography";
import styled from "styled-components";

export const Text = styled(Typography)`
  letter-spacing: 0.093rem;
  color: ${(props) => props.theme.pallete.main.orange};
  margin-block-end: -8px;
`;
