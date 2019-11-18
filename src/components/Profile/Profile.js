import React from "react";
import { useStyles } from "./styles";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import firebase from "../../firebase";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

function Profile(props) {
  const classes = useStyles();

  const handleLogout = () => {
    firebase.logout();
    props.setLoggedIn(false);
    props.history.replace("/login");
  };

  return (
    <Container>
      <div className={classes.container}>
        <h1>User Profile</h1>{" "}
        <div>
          <Box 
            color="white" 
            bgcolor="black" p={6}
          >
            User Profile
          </Box>
        </div>
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </Container>

  );
}

export default withRouter(Profile);
