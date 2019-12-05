import React, { useState } from "react";
import { useStyles } from "./styles";
import firebase from "../../firebase.js";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";

function Signup(props) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  async function handleSubmit() {
    console.log(formIsComplete());
    if (formIsComplete()) {
      try {
        await firebase.register(username, email, password, photoURL);
        props.setLoggedIn(true);
        firebase.db
          .collection("users")
          .doc(username)
          .set({
            points: 30,
            picURL: photoURL,
            username: username
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
        firebase.db
          .collection("users")
          .doc(username)
          .collection("quizzesTaken")
          .doc("0781963e-0b72-4315-9600-6bb34f404285")
          .set({
            id: "0781963e-0b72-4315-9600-6bb34f404285"
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
        props.history.replace("/feed");
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("Form must be complete");
    }
  }

  const formIsComplete = () => {
    return (
      email != null &&
      password != null &&
      username != null &&
      photoURL.length > 1
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.card}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={e => e.preventDefault()}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={e => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="photoURL"
                label="Photo URL"
                type="photoURL"
                id="photoURL"
                onChange={e => setPhotoURL(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login">Already have an account? Log in!</Link>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Container>
  );
}

export default withRouter(Signup);
