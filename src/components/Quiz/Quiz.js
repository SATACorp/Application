import React, { useState } from "react";
import { useStyles } from "./styles";
import firebase from "../../firebase";
import { TakeQuiz } from "../TakeQuiz";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Logo from "../../assets/Logo.png";
import { flexbox } from "@material-ui/system";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

export default function Quiz(props) {
  // Calls to QuizModel in database
  // Pre-condition: Quiz exists, quiz has both questions and corresponding answers that aren't "NA"
  // Post-condition: Returns the answers
  //   const getQuizAnswers = (quizzes, quiz) => {
  //     return !quizzes.has(quiz) ? "this doesn't work" : quiz.answers;
  //   };

  //  Pre-condition: Gets the answers from the retrieval method
  // Post-condition: Returns results based on an internal comparison between user's answers and
  // the right answers that are stored, returns count of right answers
  // const countCorrectAnswers = (userAnswer) => {
  //     const quizAnswers = getQuizAnswers(quizzes, quiz);
  //     let countCorrect = 0;
  //     quizAnswers.forEach(question => {
  //         if (question.answer === userAnswer) {
  //             countCorrect++;
  //         }
  //     })
  //     return countCorrect * 100;
  // }

  // Pre-condition: User exists, user's point value is greater than or equal to 0, gets values from the comparison method
  // Post-condition: Increments user's point total based on the returned value from comparison method
  // const updatePoints = (userId) => {
  // updates user points
  // }
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card className={classes.container}>
      <CardMedia>
        <img src={require("../../assets/Logo.png")} className={classes.img} />
      </CardMedia>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.quizName}
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
          >
            Take Quiz
          </Button>
        </CardContent>
        <TakeQuiz open={open} handleClose={handleClose} quizID={props.quizID} />
      </div>
    </Card>
  );
}
