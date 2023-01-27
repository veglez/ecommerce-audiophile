import Typography from "@components/Typography";
import styled from "styled-components";

export const Title = styled(Typography)`
  margin-block: 40px 32px;
`;

export const OrangeText = styled(Typography)`
  color: ${({ theme }) => theme.pallete.main.orange};
`;
