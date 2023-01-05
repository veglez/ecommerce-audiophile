import styled, { css } from "styled-components";
import { IButtonProps } from ".";

type Inner = IButtonProps["type"] | "withIcon";

const styles: Record<Inner, string> = {
  filled: `border: 1px solid red;`,
  outlined: `border: 1px solid blue;`,
  withIcon: "border: 4px solid green;",
};

export const ButtonStyled = styled.button<{ innerType: Inner }>`
  border: 1px solid transparent;
  padding: 15px 30px;
  background: ${(props) => {
    switch (props.innerType) {
      case "filled":
        return props.theme.pallete.main.orange;
      case "outlined":
        return props.theme.pallete.neutral.white;
      default:
        return props.theme.pallete.neutral.white;
    }
  }};
  border-color: ${(props) =>
    props.innerType === "outlined" ? props.theme.pallete.neutral.black : null};
  color: ${(props) => {
    switch (props.innerType) {
      case "filled":
        return props.theme.pallete.neutral.white;
      case "outlined":
        return props.theme.pallete.neutral.black;
      case "withIcon":
        return props.theme.pallete.neutral.black;
    }
  }};

  ${(props) => css(styles[props.innerType])}
`;
