import React from "react";
import { useStyles } from "./styles";
import { QuizForm } from "../QuizForm";
import { Quiz } from "../Quiz";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Quizzes() {
  // Functions necessary for quiz retrieval

  // const getQuizzes = () => {
  //  API / database call
  // }
  //
  // const makeQuizList = () => {
  // create JSX element of quiz list
  // }

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
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.container}>
      <h2 class={classes.pageTitle}>Quizzes</h2>
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
        <Quiz quizName={"Quiz Name Here"} />
        <Quiz quizName={"Quiz Name Here"} />
        <Quiz quizName={"Quiz Name Here"} />
        <Quiz quizName={"Quiz Name Here"} />
        <Quiz quizName={"Quiz Name Here"} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Quiz quizName={"Quiz Name Here"} />
        <Quiz quizName={"Quiz Name Here"} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Quiz quizName={"Quiz Name Here"} />
      </TabPanel>
    </div>
  );
}
