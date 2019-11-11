import React from "react";
import { useStyles } from "./styles";

export default function QuizList() {
  // Functions necessary for quiz retrieval

  // const getQuizzes = () => {
  //  API / database call
  // }

  // const makeQuizList = () => {
  // create JSX element of quiz list
  // }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Quizzes</h1>
    </div>
  );
}
