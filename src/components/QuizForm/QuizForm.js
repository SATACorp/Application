import React, { useState } from "react";
import { useStyles } from "./styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export default function QuizForm() {
  const classes = useStyles();

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

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <h2>Make a Quiz!</h2>
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
                  label="Question #1"
                  onChange={e => setMultipleChoiceQ2(e.target.value)}
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
          >
            Submit Quiz
          </Button>
        </Grid>
      </form>
    </Container>
  );
}
