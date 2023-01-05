import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import myTheme from "./styles/theme/default";
import { BrowserRouter } from "react-router-dom";

const root = ReactDom.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={myTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
