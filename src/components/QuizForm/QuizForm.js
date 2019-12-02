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
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

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

  const handleSubmit = e => {
    e.preventDefault();
    firebase.db
      .collection("quizzes")
      .doc(quizID)
      .set({
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
    props.handleClose();
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
                  <DoneOutlineIcon color="primary" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Correct Answer"
                    onChange={e => setTrueFalseQAnswer(e.target.value)}
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
                    label="Wrong Answer"
                    onChange={e => setTrueFalseQWrong(e.target.value)}
                    required
                  />
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
