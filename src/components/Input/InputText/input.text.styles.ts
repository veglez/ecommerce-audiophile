import Flex from "@components/UI/Flex";
import styled from "styled-components";

interface IErrorProps {
  error: boolean;
}

export const Container = styled(Flex)<IErrorProps>`
  color: ${(props) => {
    return props.error ? props.theme.pallete.alerts.error : "inherit";
  }};
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: -0.021rem;
`;

export const InputTextStyled = styled.input<IErrorProps>`
  border-radius: 8px;
  outline: none;
  border: solid
    ${(props) => {
      return props.error
        ? "2px " + props.theme.pallete.alerts.error
        : "1px " + props.theme.pallete.alerts.normal;
    }};
  display: block;
  width: 100%;
  padding: 18px 24px;

  font-size: 1.4rem;
  letter-spacing: -0.025rem;
  font-weight: bold;

  &:focus {
    border-color: ${(props) =>
      props.error
        ? props.theme.pallete.alerts.error
        : props.theme.pallete.main.orange};
  }
`;
