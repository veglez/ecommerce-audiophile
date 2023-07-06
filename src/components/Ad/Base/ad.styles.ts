import ResponsiveImage from "@components/ResponsiveImage";
import Typography from "@components/Typography";
import styled from "styled-components";

export const Title = styled(Typography)`
  margin-block: 40px 32px;
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    &,
    & span {
      font-size: 4rem;
      line-height: 4.4rem;
      letter-spacing: 0.143px;
    }
  }
`;

export const OrangeText = styled(Typography)`
  color: ${({ theme }) => theme.pallete.main.orange};
`;

export const Container = styled.div`
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    width: 100%;
    text-align: center;

    & * {
      margin: 0 auto;
    }

    & p {
      max-width: 573px;
    }

    & p:first-of-type {
      margin-block: 63px 32px;
    }
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

export const Image = styled(ResponsiveImage)`
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    max-width: inherit;
    width: 100%;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    width: 540px;
    height: 588px;
  }
`;
