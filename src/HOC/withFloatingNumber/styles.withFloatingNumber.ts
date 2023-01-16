import styled from "styled-components";
import { typeWithFloatingNumber } from ".";

export const Container = styled.div<typeWithFloatingNumber>`
  position: relative;

  &::before {
    content: "${(props) => props.number}";
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: ${({ theme }) => theme.pallete.main.orange};
    width: 2ch;
    text-align: center;
    border-radius: 50%;
    z-index: 100;
  }
`;
