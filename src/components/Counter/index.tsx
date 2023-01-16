import Typography from "@components/Typography";
import { forwardRef, useImperativeHandle, useState } from "react";
import { Container } from "./styles.counter";

export interface ICounterRef {
  counter: number;
}

const Counter = forwardRef<ICounterRef, object>(function Counter(_, ref) {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    const newState = counter <= 1 ? 1 : counter - 1;
    setCounter(newState);
  };

  useImperativeHandle(ref, () => ({ counter }));

  return (
    <Container gap={20}>
      <Typography
        variant="subtitle"
        onClick={handleDecrement}
        style={{ opacity: 0.25 }}
      >
        -
      </Typography>
      <Typography variant="subtitle" align="center" style={{ width: "3ch" }}>
        {counter}
      </Typography>
      <Typography
        variant="subtitle"
        onClick={handleIncrement}
        style={{ opacity: 0.25 }}
      >
        +
      </Typography>
    </Container>
  );
});

export default Counter;
