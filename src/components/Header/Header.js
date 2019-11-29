import React from "react";
import { useStyles } from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import firebase from "../../firebase";
import Logo from "../../assets/Logo.png";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

export default function Header(props) {
  const classes = useStyles();
  

  return (
    <AppBar position="fixed" color="disabled" className={classes.container}>
      <Toolbar>
        <CardMedia>
          <img src={require("../../assets/Logo.png")} className={classes.img} />
        </CardMedia>
        <Typography variant="h6" className={classes.title}>
          SendNews
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
