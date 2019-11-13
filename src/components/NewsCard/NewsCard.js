import React from "react";
import { useStyles } from "./styles";
import firebase from "../../firebase";

export default function NewsCard() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>News Card</h1>
    </div>
  );
}
