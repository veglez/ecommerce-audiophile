import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    pallete: {
      main: {
        orange: string;
        black: string;
        gray: string;
      };
      hover: {
        gray: string;
        orange: string;
      };
      neutral: {
        black: string;
        white: string;
      };
    };
    typography: {
      families: {
        main: string;
      };
      weights: {
        bold: number;
        medium: number;
        regular: number;
      };
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
