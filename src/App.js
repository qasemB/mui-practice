import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import Header from "./components/Header";
import Content from "./components/Content";

const useStyle = makeStyles({
  mystyle: {
    fontStyle: "oblique",
  },
  content: {
    marginTop: "10px",
  },
});

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => {
  const classes = useStyle();
  return (
    <StylesProvider jss={jss}>
      <Grid container direction="column">
        <Grid item>
          <Header cool={false} />
        </Grid>
        <Grid item container className={classes.content}>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <Content />
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
    </StylesProvider>
  );
};
export default App;
