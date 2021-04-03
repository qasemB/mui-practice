import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  direction: "rtl",
  typography: {
    fontFamily: "BYekan",
  },
  palette: {
    primary: {
      light: purple[200],
      main: purple[500],
      dark: purple[800],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
