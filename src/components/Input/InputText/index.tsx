import Flex from "@components/UI/Flex";
import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { Container, Text, InputTextStyled } from "./input.text.styles";

export type IInputTextProps = {
  label: string;
  errorMessage?: FieldError;
};

const InputText = forwardRef<
  HTMLInputElement,
  IInputTextProps & React.InputHTMLAttributes<HTMLInputElement>
>(function InputText(props, externalRef) {
  const { label, errorMessage, name, type = "text", ...rest } = props;
  const haveErrors = Boolean(errorMessage);
  return (
    <Container direction="column" error={haveErrors} gap={9}>
      <Flex justify="space-between">
        <label htmlFor={name}>
          <Text>{label}</Text>
        </label>
        {errorMessage && <Text>{errorMessage.message}</Text>}
      </Flex>
      <InputTextStyled
        error={haveErrors}
        ref={externalRef}
        type={type}
        id={name}
        name={name}
        {...rest}
      />
    </Container>
  );
});

export default InputText;
