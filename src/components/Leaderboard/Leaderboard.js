import React from "react";
import { useStyles } from "./styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Logo from "../../assets/Logo.png";
import { flexbox } from "@material-ui/system";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

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

  const classes = useStyles();
  const theme = createMuiTheme();

  return (
    <MuiThemeProvider theme={theme}>
    <Container className={classes.container} component="main" maxWidth="xl">
      <Typography component="div">
        <h1> Leaderboard </h1>
        <h2> This is where leaders and their scores will be posted </h2>
        <img src={Logo}></img>
      </Typography>
      <Grid>
        <Grid item xs={12}>
          <Button
            type="checkUser"
            variant="contained"
            color="primary"
            className={classes.checkUser}
          >
            This is user one's data!
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="checkUser"
            variant="contained"
            color="secondary"
            className={classes.checkUser}
          >
            This is user two's data!
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="checkUser"
            variant="contained"
            color="default"
            className={classes.checkUser}
          >
            This is user three's data!
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="checkUser"
            variant="contained"
            color="primary"
            className={classes.checkUser}
          >
            This is user your user points total!
          </Button>
        </Grid>
      </Grid>
    </Container>
    </MuiThemeProvider>
  );
}
