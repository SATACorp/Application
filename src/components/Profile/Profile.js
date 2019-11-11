import React from "react";
import { useStyles } from "./styles";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import firebase from "../../firebase";

function Profile(props) {
  const classes = useStyles();

  const handleLogout = () => {
    firebase.logout();
    props.setLoggedIn(false);
    props.history.replace("/login");
  };

  return (
    <div className={classes.container}>
      <h1>Profile</h1>{" "}
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}

export default withRouter(Profile);
