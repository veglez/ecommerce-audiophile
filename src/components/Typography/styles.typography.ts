import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";
import { ITypographyProps } from "@components/Typography";

const TypographyVariants: Record<
  NonNullable<ITypographyProps["variant"]>,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  h1: css`
    font-size: 5.6rem;
    line-height: 5.8rem;
    letter-spacing: 0.2rem;
  `,
  h2: css`
    font-size: 4rem;
    line-height: 4.4rem;
    letter-spacing: 0.15rem;
  `,
  h3: css`
    font-size: 3.2rem;
    line-height: 3.6rem;
    letter-spacing: 0.115rem;
  `,
  h4: css`
    font-size: 2.8rem;
    line-height: 3.8rem;
    letter-spacing: 0.2rem;
  `,
  h5: css`
    font-size: 2.4rem;
    line-height: 3.3rem;
    letter-spacing: 0.17rem;
  `,
  h6: css`
    font-size: 1.8rem;
    line-height: 2.4rem;
    letter-spacing: 0.13rem;
  `,
  overline: css`
    font-weight: ${(props) => props.theme.typography.weights.regular};
    font-size: 1.4rem;
    line-height: 1.9rem;
    letter-spacing: 0.1rem;
  `,
  subtitle: css`
    font-size: 1.3rem;
    line-height: 2.5rem;
    letter-spacing: 0.1rem;
  `,
  body: css`
    text-transform: none;
    font-weight: ${(props) => props.theme.typography.weights.medium};
    font-size: 1.5rem;
    line-height: 2.5rem;
  `,
};

type Variant = Required<Pick<ITypographyProps, "variant" | "align">>;

export const Text = styled.p<Variant>`
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.typography.weights.bold};
  text-align: ${(props) => props.align};
  ${(props) => TypographyVariants[props.variant]}
`;
