import { FC } from "react";
import styled from "styled-components";
import { withHTMLAttributes } from "types/utilities";

export interface IFlexProps {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  gap?: number;
  align?: "baseline" | "flex-start" | "flex-end" | "center" | "stretch";
  justify?:
    | "space-between"
    | "space-evenly"
    | "space-around"
    | "flex-start"
    | "flex-end"
    | "center";
  children?: React.ReactNode;
  as?: keyof HTMLElementTagNameMap;
}

const Container = styled.div<IFlexProps>`
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap}px;
`;

const Flex: FC<withHTMLAttributes<IFlexProps>> = (props) => {
  const {
    as = "div",
    direction = "row",
    align = "center",
    justify = "center",
    children,
    gap,
    ...rest
  } = props;
  return (
    <Container
      as={as}
      direction={direction}
      align={align}
      justify={justify}
      gap={gap}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Flex;
