//children

import { FC } from "react";
import { withHTMLAttributes } from "types/utilities";
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
  align?: "center" | "justify" | "right" | "left";
}

const Typography: FC<withHTMLAttributes<ITypographyProps>> = (props) => {
  const {
    children,
    variant = "body",
    as = "p",
    align = "left",
    ...rest
  } = props;
  return (
    <Text as={as} variant={variant} align={align} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
