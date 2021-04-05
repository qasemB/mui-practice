import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { AcUnitRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  headerTitle: {
    flex: 1,
  },
  root: {
    color: "red",
    border: " 1px solid white",
  },
}));

const Header = (props) => {
  const classes = useStyles(props);
  console.log(classes);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.headerTitle}>
          این هدر است برای این صفحه
        </Typography>

        <IconButton classes={{ root: classes.root }}>
          <AcUnitRounded />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
