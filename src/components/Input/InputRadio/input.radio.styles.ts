import styled from "styled-components";

export const InputContainer = styled.label`
  padding: 18px 16px;
  display: flex;
  gap: 16px;
  width: 100%;
  justify-content: flex-start;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.pallete.alerts.normal};

  &:hover,
  &:focus {
    border-color: ${(props) => props.theme.pallete.main.orange};
  }

  & .input {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: initial;

    &:checked {
      background: radial-gradient(
        closest-side,
        ${(props) => props.theme.pallete.main.orange} 60%,
        white 0%
      );
    }
  }

  & .label {
    font-weight: bold;
    font-size: 1.4rem;
    letter-spacing: -0.025rem;
  }
`;
