import { DefaultTheme } from "styled-components";

export const breakpoints = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1300px",
} as const;

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
      regular: 400,
    },
  },
  breakpoints,
};

export default myTheme;
