import Flex from "@components/UI/Flex";
import styled from "styled-components";

export const Container = styled(Flex)`
  background-color: ${({ theme }) => theme.pallete.neutral.black};
  color: ${({ theme }) => theme.pallete.neutral.white};
  padding: 52px 24px;
  position: relative;

  &::before {
    content: "";
    width: 101px;
    height: 4px;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.pallete.main.orange};
  }
`;
