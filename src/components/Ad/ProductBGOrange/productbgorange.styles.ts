import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import styled from "styled-components";

export const Container = styled(Flex)`
  background-color: ${({ theme }) => theme.pallete.main.orange};
  position: relative;
  overflow: hidden;
  padding: 55px 24px;
  border-radius: 8px;

  & .circle {
    background-color: transparent;
    opacity: 0.21;
    border: 1px solid;
    border-color: ${({ theme }) => theme.pallete.neutral.white};
    border-radius: 50%;
    position: absolute;
    top: 27%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);

    &:first-of-type {
      width: 272px;
      height: 272px;
    }

    &:nth-of-type(2) {
      width: 320px;
      height: 320px;
    }

    &:nth-of-type(3) {
      width: 558px;
      height: 558px;
    }
  }

  & > * {
    z-index: 2;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.pallete.neutral.white};
  font-size: 3.6rem;
  letter-spacing: 0.129rem;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  max-width: 200px;
  text-align: center;
  line-height: 4rem;
`;
export const ImgContainer = styled.div`
  width: 172px;
  height: 207px;
  margin-block-end: 8px;
`;

export const Message = styled(Typography)`
  color: ${({ theme }) => theme.pallete.neutral.white};
  opacity: 0.75;
  line-height: 2.5rem;
  max-width: 280px;
`;
