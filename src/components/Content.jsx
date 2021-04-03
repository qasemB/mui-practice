import { Grid } from "@material-ui/core";
import React from "react";
import Cards from "./Cards";

const Content = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Cards />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Cards />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Cards />
      </Grid>
    </Grid>
  );
};
export default Content;
