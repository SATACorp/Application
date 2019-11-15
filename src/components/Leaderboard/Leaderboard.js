import React from "react";
import { useStyles } from "./styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Logo from './Logo.png'

export default function Leaderboard() {
  // Pre-condition: 1 or more users exist
  // Post-condition: Sorts and displays top 3 users highest to lowest, keeping in account the user's
  // score. If user is not a part of top 3 users, their ranking is displayed underneath the leaderboard with their points total.
  // const getTopScores = () => {
  //   call to LeaderBoardModel in database
  // return scores;
  // }

  // pre: scores have been parsed with getTopScores function
  // post: returns JSX element of Leaderboard list
  // const createLeaderboard = (scores) => {
  //  scores.map(score => {
  //  return <div>score.player</div>;
  // })
  // }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.container}>
        <h1>Leaderboard</h1>
        <h2> This is where leaders and their scores will be posted </h2>
      </div>
      <div className={classes.container}>
        <img src = {Logo} />
      </div>
    </Container>

  );
}
