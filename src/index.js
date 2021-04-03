import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { render } from "react-dom";
import App from "./App";
import theme from "./theme";

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
