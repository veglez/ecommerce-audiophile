import Typography from "@components/Typography";
import { FC, useState } from "react";
import { Container } from "./styles.counter";

const Counter: FC = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    const newState = counter <= 1 ? 1 : counter - 1;
    setCounter(newState);
  };

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
};

export default Counter;
