import React, { useState } from "react";
import { useStyles } from "./styles";
import firebase from "../../firebase";
import { TakeQuiz } from "../TakeQuiz";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

export default function Quiz(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleClickOpen = () => {
    setShowQuiz(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const takeQuizButton = !props.completed ? (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      onClick={handleClickOpen}
    >
      Take Quiz
    </Button>
  ) : null;

  const photo = props.creatorPhotoURL ? (
    <img src={props.creatorPhotoURL} className={classes.img} />
  ) : (
    <img src={require("../../assets/Logo.png")} className={classes.img} />
  );

  const quiz = showQuiz ? (
    <TakeQuiz open={open} handleClose={handleClose} quizID={props.quizID} />
  ) : null;

  return (
    <Card className={classes.container}>
      <CardMedia>{photo}</CardMedia>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.quizName}
          </Typography>
          {takeQuizButton}
        </CardContent>
        {quiz}
      </div>
    </Card>
  );
}
