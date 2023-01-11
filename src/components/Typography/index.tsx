//children

import { FC } from "react";
import { Text } from "./styles.typography";

export interface ITypographyProps {
  children: React.ReactNode;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "overline"
    | "subtitle"
    | "body";
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Typography: FC<ITypographyProps & React.HTMLAttributes<HTMLElement>> = (
  props
) => {
  const { children, variant = "body", as = "p" } = props;
  return (
    <Text as={as} variant={variant}>
      {children}
    </Text>
  );
};

export default Typography;
