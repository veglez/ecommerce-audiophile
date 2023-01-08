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
  function Navbar() {
    return (
      <Container>
        {list.map((props, i) => (
          <LinkItem key={i} {...props} {...config} />
        ))}
      </Container>
    );
  };

export default withNavigation;
