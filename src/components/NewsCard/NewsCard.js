import React, { useState } from "react";
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
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { QuizForm } from "../QuizForm";

export default function NewsCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.card}>
      <CardHeader title={props.title} subheader={props.sourceName} />
      <CardMedia className={classes.media} image={props.urlImage} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
        <div className={classes.button} onClick={handleClickOpen}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
        <QuizForm
          open={open}
          handleClose={handleClose}
          articleURL={props.url}
          articleTitle={props.title}
        />
      </CardContent>
    </Card>
  );
}
