import React from "react";
import styles from "./Quiz.module.css";

export default function Quiz() {
  //   Functional Code Stub
  //   const getQuizAnswers = (quizzes, quiz) => {
  //     return !quizzes.has(quiz) ? "this doesn't work" : quiz.answers;
  //   };

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

  return <div className={styles.container}>Quiz</div>;
}
