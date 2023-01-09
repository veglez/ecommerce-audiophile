import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  pallete: {
    main: {
      orange: "#D87D4A",
      black: "#101010",
      gray: "#F1F1F1",
    },
    hover: {
      orange: "#fbaf85",
      gray: "#FAFAFA",
    },
    neutral: {
      black: "#000",
      white: "#FFF",
    },
  },
  typography: {
    families: {
      main: "'Manrope', sans-serif",
    },
    weights: {
      bold: 700,
      medium: 500,
      regular: 4000,
    },
  },
  breakpoints: {
    mobile: 375,
    tablet: 750,
    desktop: 1300,
  },
};

export default myTheme;
