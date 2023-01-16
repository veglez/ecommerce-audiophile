/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from "react";
import { Container } from "./styles.withFloatingNumber";

export type typeWithFloatingNumber = {
  number: number;
};

function withFloatingNumber<T>(Component: React.FC<T>) {
  return function FloatingNumber(props: T & typeWithFloatingNumber) {
    const { number, ...rest } = props;

    return (
      <Container number={number}>
        <Component {...(rest as T)} />
      </Container>
    );
  };
}

export default withFloatingNumber;
