import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { LeaderboardCard } from "../LeaderboardCard";
import firebase from "../../firebase";

export default function Leaderboard(props) {
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

  const [points, setPoints] = useState();

  useEffect(() => {
    const username = firebase.getCurrentUsername();
    firebase.db
      .collection("users")
      .doc(username)
      .get()
      .then(function(response) {
        setPoints(response.data().points);
      });
  }, []);

  const classes = useStyles();
  const theme = createMuiTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <h1 className={classes.pageTitle}>All-Time Leaderboard</h1>
      <Container className={classes.flex}>
        <LeaderboardCard username="Username Here" score="Score Here" className={classes.cards} />
        <LeaderboardCard username="Username Here" score="Score Here" className={classes.cards}/>
        <LeaderboardCard username="Username Here" score="Score Here" className={classes.cards} />
      </Container>
    </MuiThemeProvider>
  );
}