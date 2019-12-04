import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import { Quiz } from "../Quiz";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes, { array } from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import firebase from "../../firebase";
import { CircularProgress } from "@material-ui/core";

export default function Quizzes(props) {
  // Quizzes

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [newQuizzes, setNewQuizzes] = useState();
  const [completedQuizzes, setCompletedQuizzes] = useState();
  const [madeQuizzes, setMadeQuizzes] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Gets Different Quiz Categories
  useEffect(() => {
    getCompletedQuizzes();
  }, []);

  const getCompletedQuizzes = () => {
    let completedIDs = [];
    const username = firebase.getCurrentUsername();
    firebase.db
      .collection("users")
      .doc(username)
      .collection("quizzesTaken")
      .get()
      .then(function(snapshot) {
        snapshot.forEach(function(doc) {
          completedIDs.push(doc.data().id);
        });

        return completedIDs;
      })
      .then(IDs => {
        let completedQuizData = [];
        for (let i = 0; i < IDs.length; i++) {
          firebase.db
            .collection("quizzes")
            .doc(IDs[i])
            .get()
            .then(function(snapshot) {
              completedQuizData.push(snapshot.data());
            });
          setCompletedQuizzes(completedQuizData);
        }
        return completedQuizData;
      })
      .then(completed => {
        let madeQuizIDs = [];
        firebase.db
          .collection("users")
          .doc(username)
          .collection("quizzesMade")
          .get()
          .then(function(snapshot) {
            snapshot.forEach(function(doc) {
              madeQuizIDs.push(doc.data().id);
            });
          });
        return [completed, madeQuizIDs];
      })
      .then(quizData => {
        let newQuizData = [];
        firebase.db
          .collection("quizzes")
          .get()
          .then(function(snapshot) {
            let index = 0;
            snapshot.forEach(function(doc) {
              console.log(doc.data().uid);
              if (
                !isEquivalent(quizData[0], doc.data(), index) &&
                !quizData[1].includes(doc.data().id) &&
                index < quizData[0].length
              ) {
                newQuizData.push(doc.data());
              }
            });
            setNewQuizzes(newQuizData);
          });
        return quizData[1];
      })
      .then(quizIDs => {
        let completedQuizData = [];
        for (let i = 0; i < quizIDs.length; i++) {
          firebase.db
            .collection("quizzes")
            .doc(quizIDs[i])
            .get()
            .then(function(snapshot) {
              completedQuizData.push(snapshot.data());
            });
          setMadeQuizzes(completedQuizData);
        }
      });
  };

  const isEquivalent = (a, b, index) => {
    return a[index].uid == b.uid;
  };

  let newQuizCards;
  let completedQuizCards;
  let madeQuizCards;

  if (newQuizzes != null) {
    newQuizCards = newQuizzes.map(data => (
      <Quiz quizName={data.articleTitle} quizID={data.uid} key={data.uid} />
    ));
  } else {
    newQuizCards = (
      <div className={classes.loader}>
        <CircularProgress />
      </div>
    );
  }

  if (completedQuizzes != null) {
    completedQuizCards = completedQuizzes.map(data => (
      <Quiz
        quizName={data.articleTitle}
        quizID={data.uid}
        key={data.uid}
        completed={true}
      />
    ));
  } else {
    completedQuizCards = (
      <div className={classes.loader}>
        <CircularProgress />
      </div>
    );
  }

  if (madeQuizzes != null) {
    madeQuizCards = madeQuizzes.map(data => (
      <Quiz
        quizName={data.articleTitle}
        quizID={data.uid}
        key={data.uid}
        completed={true}
      />
    ));
  } else {
    madeQuizCards = (
      <div className={classes.loader}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="New" {...a11yProps(0)} />
        <Tab label="Completed" {...a11yProps(1)} />
        <Tab label="Yours" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {newQuizCards}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {completedQuizCards}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {madeQuizCards}
      </TabPanel>
    </div>
  );

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  }
}
