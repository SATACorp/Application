import React from "react";
import { useStyles } from "./styles";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import firebase from "../../firebase";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { LeaderboardCard } from "../LeaderboardCard";

function Profile(props) {
  const classes = useStyles();

  const handleLogout = () => {
    firebase.logout();
    props.setLoggedIn(false);
    props.history.replace("/login");
  };

  return (
    <Container className={classes.container}>
    <h1 className={classes.pageTitle}>Hello {firebase.getCurrentUsername()}</h1>
    <h2 className={classes.pageSubtitle}>Welcome to your profile!</h2>
      <Card>
        <CardContent>
          <LeaderboardCard username = {firebase.getCurrentUsername()} score = "Score Here"></LeaderboardCard>
          <h2 className = {classes.userCard}>Your position on the leaderboard is (X) out of (Y USERS).</h2>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </CardContent>
        <CardContent>
          
        </CardContent>
      </Card>
    </Container>
  );
}

export default withRouter(Profile);
