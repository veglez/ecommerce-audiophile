import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import styled from "styled-components";

type ContainerProps = {
  images: API.Product["image"];
};

export const Container = styled(Flex)<ContainerProps>`
  background-color: ${({ theme }) => theme.pallete.neutral.black};
  color: white !important;
  position: relative;
  height: 510px;

  &::before {
    content: "";
    position: absolute;
    background-image: url(${(props) => props.images.mobile});
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    background-repeat: no-repeat;
    background-position: 0 -89px;
    background-size: 100%;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 126px 195px 167px;
    height: 639px;
    &::before {
      background-image: url(${(props) => props.images.tablet});
      background-size: 100% 100%;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    align-items: flex-start;
    padding-inline-start: 165px;

    &::before {
      background-image: url(${(props) => props.images.desktop});
    }

    & #container {
      max-width: 379px;
      align-items: flex-start;
      gap: 24px;
    }

    & div a {
      margin-block-start: 16px;
    }
  }

  & > *:last-child {
    margin-block-start: 28px;
  }
`;

export const NewProductText = styled(Typography)`
  opacity: 0.5;
  letter-spacing: 1rem;
`;

export const ProductName = styled.p`
  font-size: 3.6rem;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  letter-spacing: 0.0129rem;
  line-height: 4rem;
  text-align: center;
  position: relative;
  margin-block: 16px 24px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 5.6rem;
    line-height: 5.8rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    margin: 0px;
  }
`;
