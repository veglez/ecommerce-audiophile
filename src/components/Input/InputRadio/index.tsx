import Flex from "@components/UI/Flex";
import { forwardRef } from "react";
import { InputContainer } from "./input.radio.styles";

export type IInputRadioProps = {
  values: string[];
  name: string;
};

const InputRadio = forwardRef<
  HTMLInputElement,
  IInputRadioProps & React.InputHTMLAttributes<HTMLInputElement>
>(function InputRadio(props, ref) {
  const { values, name, ...rest } = props;
  return (
    <Flex gap={16} direction={"column"}>
      {values.map((data) => {
        return (
          <InputContainer key={data}>
            <input
              className="input"
              ref={ref}
              type="radio"
              value={data}
              name={name}
              {...rest}
            />
            <p className="label">{data}</p>
          </InputContainer>
        );
      })}
    </Flex>
  );
});

export default InputRadio;
