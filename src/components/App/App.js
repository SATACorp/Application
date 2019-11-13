import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import { Navbar } from "../../components/Navbar";
import { Login } from "../../components/Login";
import { Signup } from "../../components/Signup";
import { Feed } from "../../components/Feed";
import { Profile } from "../../components/Profile";
import { Leaderboard } from "../../components/Leaderboard";
import { Quizlist } from "../components/../Quizlist";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import firebase from "../../firebase";

function App() {
  const classes = useStyles();

  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
    });
    setIsLoading(false);
  }, [loggedIn]);

  const routes = !isLoading ? (
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
      <PrivateRoute authed={loggedIn} exact path="/feed" component={Feed} />
      <PrivateRoute
        authed={loggedIn}
        exact
        path="/profile"
        component={Profile}
        setLoggedIn={setLoggedIn}
      />
      <PrivateRoute
        authed={loggedIn}
        exact
        path="/quizzes"
        component={Quizlist}
      />
      <PrivateRoute
        authed={loggedIn}
        exact
        path="/leaderboard"
        component={Leaderboard}
      />
    </>
  ) : (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
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

function PrivateRoute({ component: Component, authed, setLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} setLoggedIn={setLoggedIn} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default App;
