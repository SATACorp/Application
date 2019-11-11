import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import { Navbar } from "../../components/Navbar";
import { Login } from "../../components/Login";
import { Signup } from "../../components/Signup";
import { Feed } from "../../components/Feed";
import { Profile } from "../../components/Profile";
import { Leaderboard } from "../../components/Leaderboard";
import { QuizList } from "../../components/QuizList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import firebase from "../../firebase";

function App() {
  const classes = useStyles();

  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
    });
  }, [loggedIn]);

  const routes = firebase.isLoggedIn() ? (
    <>
      <Route exact path="/feed" render={() => <Feed />} />
      <Route
        exact
        path="/profile"
        render={() => <Profile setLoggedIn={setLoggedIn} />}
      />
      <Route exact path="/quizzes" render={() => <QuizList />} />
      <Route exact path="/leaderboard" render={() => <Leaderboard />} />
    </>
  ) : (
    <>
      <Route
        exact
        path="/signup"
        render={() => <Signup setLoggedIn={setLoggedIn} />}
      />
      <Route
        exact
        path="/login"
        render={() => <Login setLoggedIn={setLoggedIn} />}
      />
    </>
  );

  return firebaseInitialized !== false ? (
    <div className={classes.container}>
      <BrowserRouter>
        <Switch>{routes}</Switch>
        <Navbar isLoggedIn={loggedIn} />
      </BrowserRouter>
    </div>
  ) : (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  );
}

export default App;
