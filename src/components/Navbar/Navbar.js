import React from "react";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import ScoreIcon from "@material-ui/icons/Score";

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.container}>
      <BottomNavigationAction
        className={classes.icon}
        component={Link}
        to={`${props.isLoggedIn ? "/feed" : "/login"}`}
        label="Feed"
        value="feed"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        className={classes.icon}
        component={Link}
        to={`${props.isLoggedIn ? "/leaderboard" : "/login"}`}
        label="Leaderboard"
        value="leaderboard"
        icon={<ScoreIcon />}
      />
      <BottomNavigationAction
        className={classes.icon}
        component={Link}
        to={`${props.isLoggedIn ? "/profile" : "/login"}`}
        label="Profile"
        value="profile"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
}
