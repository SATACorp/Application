import React from "react";
import { useStyles } from "./styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Logo from "../../assets/Logo.png";
import { flexbox } from "@material-ui/system";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { LeaderboardCard } from "../LeaderboardCard";

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
        <LeaderboardCard username="Username Here" score="Score Here" />
        <LeaderboardCard username="Username Here" score="Score Here" />
        <LeaderboardCard username="Username Here" score="Score Here" />
      </Container>
    </MuiThemeProvider>
  );
}
