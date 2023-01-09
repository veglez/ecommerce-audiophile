import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
  font-family: ${(props) => props.theme.typography.families.main};
  margin: 0;
  padding: 0;
}
body {
  font-size: 1.6rem;
}

picture {
  display: block;
}

img {
  display: block;
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

`;

export default Globals;
