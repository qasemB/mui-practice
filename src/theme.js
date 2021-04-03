import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  direction: "rtl",
  typography: {
    fontFamily: "BYekan",
  },
  palette: {
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
