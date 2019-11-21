import React from "react";
import { useStyles } from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="disabled" className={classes.container}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          SendNews
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
