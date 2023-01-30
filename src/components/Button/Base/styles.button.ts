import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";
import { IButtonProps } from ".";

type Inner = IButtonProps["variant"];

const variants: Record<
  Inner,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  filled: css`
    background-color: ${(props) => props.theme.pallete.main.orange};
    color: ${(props) => props.theme.pallete.neutral.white};

    &:hover {
      background-color: ${(props) => props.theme.pallete.hover.orange};
    }
  `,
  outlined: css`
    background-color: ${(props) => props.theme.pallete.neutral.white};
    color: ${(props) => props.theme.pallete.neutral.black};
    &:hover {
      background-color: ${(props) => props.theme.pallete.neutral.black};
      color: ${(props) => props.theme.pallete.neutral.white};
    }
  `,
  withIcon: css`
    background-color: none;
    color: ${(props) => props.theme.pallete.neutral.black};
    opacity: 0.5;

    &:hover {
      color: ${(props) => props.theme.pallete.main.orange};
    }
  `,
};

export const ButtonStyled = styled.button<{
  innerType: Inner;
}>`
  display: flex;
  gap: 10px;
  align-items: center;
  border: 1px solid transparent;
  padding: 15px 30px;
  font-weight: ${(props) => props.theme.typography.weights.bold};
  font-size: 1.3rem;
  line-height: 1.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  ${(props) => variants[props.innerType]};

  & .button__text {
    text-transform: uppercase;
  }
`;
