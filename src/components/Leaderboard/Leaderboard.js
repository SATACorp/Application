import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { LeaderboardCard } from "../LeaderboardCard";
import firebase from "../../firebase";
import { CircularProgress } from "@material-ui/core";

export default function Leaderboard(props) {
  const [points, setPoints] = useState();
  const [users, setUsers] = useState();

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

  useEffect(() => {
    const userData = [];
    firebase.db
      .collection("users")
      .orderBy("points", "desc")
      .limit(10)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          userData.push(doc.data());
        });
        setUsers(userData);
      });
  }, []);

  const classes = useStyles();
  const theme = createMuiTheme();

  const topUsers = () => {
    let leaderboardCards;
    if (users != null) {
      leaderboardCards = users.map((user, index) => {
        return (
          <LeaderboardCard
            profile={false}
            username={user.username}
            score={user.points}
            photo={user.picURL}
            rank={index + 1}
            key={index}
          />
        );
      });
    } else {
      leaderboardCards = (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      );
    }
    return leaderboardCards;
  };

  return (
    <MuiThemeProvider theme={theme}>
      {/* <h1 className={classes.pageTitle}>All-Time Leaderboard</h1> */}
      <Container className={classes.flex}>
        <Card className={classes.titleCard}>
          <Typography variant="h3" className={classes.pageTitle}>
            Top 10 Users
          </Typography>
        </Card>
        {topUsers()}
      </Container>
    </MuiThemeProvider>
  );
}
