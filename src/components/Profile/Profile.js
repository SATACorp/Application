import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import firebase from "../../firebase";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CircularProgress } from "@material-ui/core";

import { LeaderboardCard } from "../LeaderboardCard";

function Profile(props) {
  const classes = useStyles();
  const [points, setPoints] = useState();
  const [rank, setRank] = useState();
  const [count, setCount] = useState();
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    firebase.logout();
    props.setLoggedIn(false);
    props.history.replace("/login");
  };

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
      .get()
      .then(function(querySnapshot) {
        let count = 0;
        querySnapshot.forEach(function(doc) {
          count++;
          if (firebase.getCurrentUsername() === doc.data().username) {
            setRank(count);
          }
          userData.push(doc.data());
        });
        setCount(count);
        setLoading(false);
      });
  }, []);

  const profileCard = !loading ? (
    <CardContent>
      <LeaderboardCard
        username={firebase.getCurrentUsername()}
        score={points}
        photo={firebase.getCurrentPhoto()}
      ></LeaderboardCard>
      <h2 className={classes.userCard}>
        {`Your position on the leaderboard is ${rank} out of ${count} users`}
      </h2>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </CardContent>
  ) : (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  );

  return (
    <Container className={classes.container}>
      <Card>{profileCard}</Card>
    </Container>
  );
}

export default withRouter(Profile);
