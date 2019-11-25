import React from "react";
import { useStyles } from "./styles";
import { QuizForm } from "../QuizForm";
import { Quiz } from "../Quiz";

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
      <h2>Quizzes</h2>
      <Quiz quizName={"Quiz Name Here"} />
      <Quiz quizName={"Quiz Name Here"} />
      <Quiz quizName={"Quiz Name Here"} />
      <Quiz quizName={"Quiz Name Here"} />
    </div>
  );
}
