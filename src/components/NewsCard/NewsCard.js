import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import firebase from "../../firebase";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

export default function NewsCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title={props.title} subheader={props.sourceName} />
      <CardMedia className={classes.media} image={props.urlImage} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
        <div className={classes.button}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
      </CardContent>
    </Card>
  );
}
