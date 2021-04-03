import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";

const useStyle = makeStyles({
  mystyle: {
    fontStyle: "oblique",
  },
});

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => {
  const classes = useStyle();
  return (
    <StylesProvider jss={jss}>
      <div className="App">
        <Typography className={classes.mystyle} color="secondary" variant="h1">
          سلام
        </Typography>
        <h1>سلام</h1>
        <Button fullWidth variant="contained" color="primary">
          دکمه ورود
        </Button>
      </div>
    </StylesProvider>
  );
};
export default App;
