import Typography from "@components/Typography";
import { forwardRef, useImperativeHandle, useState } from "react";
import { withHTMLAttributes } from "types/utilities";
import { Container } from "./styles.counter";

export interface ICounterRef {
  counter: number;
}

export interface ICounterProps {
  number?: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
}

const Counter = forwardRef<ICounterRef, withHTMLAttributes<ICounterProps>>(
  function Counter(props, ref) {
    const { number = 1, handleDecrement, handleIncrement, ...rest } = props;
    const [counter, setCounter] = useState(number);

    const innerHandleIncrement = () => {
      setCounter(counter + 1);
    };

    const innerHandleDecrement = () => {
      const newState = counter <= 1 ? 1 : counter - 1;
      setCounter(newState);
    };

    useImperativeHandle(ref, () => ({ counter }));

    return (
      <Container gap={20} {...rest}>
        <Typography
          variant="subtitle"
          onClick={handleDecrement ?? innerHandleDecrement}
          style={{ opacity: 0.25 }}
        >
          -
        </Typography>
        <Typography variant="subtitle" align="center" style={{ width: "3ch" }}>
          {handleDecrement ? number : counter}
        </Typography>
        <Typography
          variant="subtitle"
          onClick={handleIncrement ?? innerHandleIncrement}
          style={{ opacity: 0.25 }}
        >
          +
        </Typography>
      </Container>
    );
  }
);

export default Counter;
