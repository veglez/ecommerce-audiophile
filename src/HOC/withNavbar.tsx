import React from "react";
import LinkItem, {
  ILinkItemExtraProps,
  ILinkItemProps,
} from "components/LinkItem";
import { DefaultTheme, StyledComponent } from "styled-components";

const withNavigation = (
  Container: StyledComponent<"nav", DefaultTheme, object, never>,
  list: ILinkItemProps[],
  config?: ILinkItemExtraProps
) =>
  function Navbar(innerProps: React.HTMLAttributes<HTMLElement>) {
    const { onClick, ...rest } = innerProps;
    return (
      <Container {...rest}>
        {list.map((props, i) => (
          <LinkItem onClick={onClick} key={i} {...props} {...config} />
        ))}
      </Container>
    );
  };

export default withNavigation;
