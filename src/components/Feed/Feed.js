import React from "react";
import { useStyles } from "./styles";
import firebase from "../../firebase";
import NewsCard from "../NewsCard/NewsCard";

export default function Feed() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>Feed</h1>
      <h2>Hello {firebase.getCurrentUsername()}</h2>
      <div>
        <NewsCard />
      </div>
    </div>
  );
}
