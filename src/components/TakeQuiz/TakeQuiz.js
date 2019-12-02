import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import firebase from "../../firebase";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export default function TakeQuiz(props) {
  const classes = useStyles();
  const [quiz, setQuiz] = useState({});

  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();

  useEffect(() => {
    var docRef = firebase.db.collection("quizzes").doc(props.quizID);

    docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          setQuiz(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }, []);

  const handleSubmit = () => {};

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent className={classes.container}>
        <FormControl component="fieldset" className={classes.formControl}>
          <DialogContentText>
            <h3>{quiz.multipleChoiceQ1}</h3>
          </DialogContentText>
          <RadioGroup
            aria-label="question1"
            name="question1"
            // value={value}
            onChange={e => setAnswer1(e.target.value)}
          >
            <FormControlLabel
              value={quiz.multipleChoiceQ1Answer}
              control={<Radio />}
              label={quiz.multipleChoiceQ1Answer}
            />
            <FormControlLabel
              value={quiz.multipleChoiceQ1Wrong1}
              control={<Radio />}
              label={quiz.multipleChoiceQ1Wrong1}
            />
            <FormControlLabel
              value={quiz.multipleChoiceQ1Wrong2}
              control={<Radio />}
              label={quiz.multipleChoiceQ1Wrong2}
            />
            <FormControlLabel
              value={quiz.multipleChoiceQ1Wrong3}
              control={<Radio />}
              label={quiz.multipleChoiceQ1Wrong3}
            />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <DialogContentText>
            <h3>{quiz.multipleChoiceQ2}</h3>
          </DialogContentText>
          <RadioGroup
            aria-label="question2"
            name="question2"
            // value={value}
            onChange={e => setAnswer2(e.target.value)}
          >
            <FormControlLabel
              value={quiz.multipleChoiceQ2Answer}
              control={<Radio />}
              label={quiz.multipleChoiceQ2Answer}
            />
            <FormControlLabel
              value={quiz.multipleChoiceQ2Wrong1}
              control={<Radio />}
              label={quiz.multipleChoiceQ2Wrong1}
            />
            <FormControlLabel
              value={quiz.multipleChoiceQ2Wrong2}
              control={<Radio />}
              label={quiz.multipleChoiceQ2Wrong2}
            />
            <FormControlLabel
              value={quiz.multipleChoiceQ2Wrong3}
              control={<Radio />}
              label={quiz.multipleChoiceQ2Wrong3}
            />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <DialogContentText>
            <h3>{quiz.trueFalseQ}</h3>
          </DialogContentText>
          <RadioGroup
            aria-label="question2"
            name="question2"
            // value={value}
            onChange={e => setAnswer3(e.target.value)}
          >
            <FormControlLabel value="true" control={<Radio />} label="True" />
            <FormControlLabel value="false" control={<Radio />} label="False" />
          </RadioGroup>
        </FormControl>
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
      </DialogContent>
    </Dialog>
  );
}
