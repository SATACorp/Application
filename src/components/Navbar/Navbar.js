import React from "react";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import ScoreIcon from "@material-ui/icons/Score";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

export default function Navbar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.container}
      showLabels
    >
      <BottomNavigationAction
        className={classes.icon}
        component={Link}
        to="/feed"
        label="Feed"
        value="feed"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        className={classes.icon}
        component={Link}
        to="/quizzes"
        label="Quizzes"
        value="quizzes"
        icon={<DoneOutlineIcon />}
      />
      <BottomNavigationAction
        className={classes.icon}
        component={Link}
        to="/leaderboard"
        label="Leaderboard"
        value="leaderboard"
        icon={<ScoreIcon />}
      />
      <BottomNavigationAction
        className={classes.icon}
        component={Link}
        to="/profile"
        label="Profile"
        value="profile"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
}
