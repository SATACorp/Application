import React, { useState } from "react";
import { useStyles } from "./styles";
import firebase from "../../firebase";
import uuid from "uuid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

export default function QuizForm(props) {
  const classes = useStyles();

  const [quizID, setQuizID] = useState(uuid());
  const [multipleChoiceQ1, setMultipleChoiceQ1] = useState();
  const [multipleChoiceQ1Answer, setMultipleChoiceQ1Answer] = useState();
  const [multipleChoiceQ1Wrong1, setMultipleChoiceQ1Wrong1] = useState();
  const [multipleChoiceQ1Wrong2, setMultipleChoiceQ1Wrong2] = useState();
  const [multipleChoiceQ1Wrong3, setMultipleChoiceQ1Wrong3] = useState();
  const [multipleChoiceQ2, setMultipleChoiceQ2] = useState();
  const [multipleChoiceQ2Answer, setMultipleChoiceQ2Answer] = useState();
  const [multipleChoiceQ2Wrong1, setMultipleChoiceQ2Wrong1] = useState();
  const [multipleChoiceQ2Wrong2, setMultipleChoiceQ2Wrong2] = useState();
  const [multipleChoiceQ2Wrong3, setMultipleChoiceQ2Wrong3] = useState();
  const [trueFalseQ, setTrueFalseQ] = useState();
  const [trueFalseQAnswer, setTrueFalseQAnswer] = useState();
  const [trueFalseQWrong, setTrueFalseQWrong] = useState();

  const handleTrueFalse = val => {
    setTrueFalseQAnswer(val);
    if (
      val === "true" ? setTrueFalseQWrong("false") : setTrueFalseQWrong("true")
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    const username = firebase.getCurrentUsername();
    const photoLink = firebase.getCurrentPhoto();
    if (formIsComplete()) {
      firebase.db
        .collection("quizzes")
        .doc(quizID)
        .set({
          creator: username,
          creatorPhotoURL: photoLink,
          createdAt: getDateAsString(),
          uid: quizID,
          articleURL: props.articleURL,
          articleTitle: props.articleTitle,
          multipleChoiceQ1: multipleChoiceQ1,
          multipleChoiceQ1Answer: multipleChoiceQ1Answer,
          multipleChoiceQ1Wrong1: multipleChoiceQ1Wrong1,
          multipleChoiceQ1Wrong2: multipleChoiceQ1Wrong2,
          multipleChoiceQ1Wrong3: multipleChoiceQ1Wrong3,
          multipleChoiceQ2: multipleChoiceQ2,
          multipleChoiceQ2Answer: multipleChoiceQ2Answer,
          multipleChoiceQ2Wrong1: multipleChoiceQ2Wrong1,
          multipleChoiceQ2Wrong2: multipleChoiceQ2Wrong2,
          multipleChoiceQ2Wrong3: multipleChoiceQ2Wrong3,
          trueFalseQ: trueFalseQ,
          trueFalseQAnswer: trueFalseQAnswer,
          trueFalseQWrong: trueFalseQWrong
        })
        .then(function() {
          console.log("Quiz successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      firebase.db
        .collection("users")
        .doc(username)
        .collection("quizzesMade")
        .doc(quizID)
        .set({
          id: quizID,
          articleTitle: props.articleTitle,
          articleURL: props.articleURL,
          createdAt: getDateAsString()
        });
      props.handleClose();
    } else {
      alert("All questions must be completed");
    }
  };

  const formIsComplete = () => {
    return (
      multipleChoiceQ1 != null &&
      multipleChoiceQ1Answer != null &&
      multipleChoiceQ1Wrong1 != null &&
      multipleChoiceQ1Wrong2 != null &&
      multipleChoiceQ1Wrong3 != null &&
      multipleChoiceQ2 != null &&
      multipleChoiceQ2Answer != null &&
      multipleChoiceQ2Wrong1 != null &&
      multipleChoiceQ2Wrong2 != null &&
      multipleChoiceQ2Wrong3 != null &&
      trueFalseQ != null &&
      trueFalseQAnswer != null &&
      trueFalseQWrong != null
    );
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <Container className={classes.container} component="main" maxWidth="xs">
        <h2>Make a news quiz!</h2>
        <form className={classes.container} noValidate autoComplete="off">
          <Paper className={classes.quizSection}>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <HelpOutlineIcon color="primary" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Question #1"
                    onChange={e => setMultipleChoiceQ1(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <DoneOutlineIcon color="primary" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Correct Answer"
                    onChange={e => setMultipleChoiceQ1Answer(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <HighlightOffIcon color="secondary" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Wrong Answer #1"
                    onChange={e => setMultipleChoiceQ1Wrong1(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <HighlightOffIcon color="secondary" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Wrong Answer #2"
                    onChange={e => setMultipleChoiceQ1Wrong2(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <HighlightOffIcon color="secondary" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Wrong Answer #3"
                    onChange={e => setMultipleChoiceQ1Wrong3(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
            </div>
          </Paper>
          <Paper className={classes.quizSection}>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <HelpOutlineIcon color="primary" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Question #2"
                    onChange={e => setMultipleChoiceQ2(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <DoneOutlineIcon color="primary" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Correct Answer"
                    onChange={e => setMultipleChoiceQ2Answer(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <HighlightOffIcon color="secondary" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Wrong Answer #1"
                    onChange={e => setMultipleChoiceQ2Wrong1(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <HighlightOffIcon color="secondary" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Wrong Answer #2"
                    onChange={e => setMultipleChoiceQ2Wrong2(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <HighlightOffIcon color="secondary" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Wrong Answer #3"
                    onChange={e => setMultipleChoiceQ2Wrong3(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
            </div>
          </Paper>
          <Paper className={classes.quizSection}>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <HelpOutlineIcon color="primary" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Question #3"
                    onChange={e => setTrueFalseQ(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <RadioGroup
                    aria-label="true-false-question"
                    name="true-false-question"
                    // value={value}
                    onChange={e => handleTrueFalse(e.target.value)}
                  >
                    <FormControlLabel
                      value="true"
                      control={<Radio />}
                      label="True"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio />}
                      label="False"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
            </div>
          </Paper>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Submit Quiz
            </Button>
          </Grid>
        </form>
      </Container>
    </Dialog>
  );
}

function getDateAsString() {
  var currentdate = new Date();
  var dateTime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  return dateTime;
}
