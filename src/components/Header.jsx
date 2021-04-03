import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { AcUnitRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  headerTitle: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.headerTitle}>
          این هدر است برای این صفحه
        </Typography>
        <AcUnitRounded />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
