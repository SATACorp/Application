import React from "react";
import { useStyles } from "./styles";
import { QuizForm } from "../QuizForm";

export default function Quizzes() {
  // Functions necessary for quiz retrieval

  // const getQuizzes = () => {
  //  API / database call
  // }
  //
  // const makeQuizList = () => {
  // create JSX element of quiz list
  // }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Quizzes</h1>
      <QuizForm />
    </div>
  );
}
