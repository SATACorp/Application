import React from "react";
import styles from "./Quiz.module.css";

export default function Quiz() {
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

  return <div className={styles.container}>Quiz</div>;
}
