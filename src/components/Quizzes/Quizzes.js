import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import { QuizForm } from "../QuizForm";
import { Quiz } from "../Quiz";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import firebase from "../../firebase";
import { CircularProgress } from "@material-ui/core";

export default function Quizzes(props) {
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

  // Quizzes

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [quizzes, setQuizzes] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let quizData = [];
    firebase.db
      .collection("quizzes")
      .get()
      .then(function(snapshot) {
        snapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          quizData.push(doc.data());
        });
        setQuizzes(quizData);
      });
  }, []);

  let quizCards;

  if (quizzes != null) {
    quizCards = quizzes.map((data, index) => (
      <Quiz quizName={data.articleTitle} quizID={data.uid} />
    ));
  } else {
    return (
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
        {quizCards}
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
    </div>
  );
}
