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
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

export default function TakeQuiz(props) {
  const classes = useStyles();
  const [quiz, setQuiz] = useState({});

  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();

  const [openResults, setOpenResults] = useState(false);
  const [quizPoints, setQuizPoints] = useState();
  const [firstQuestionOrder, setFirstQuestionOrder] = useState(
    shuffleArray([0, 1, 2, 3])
  );
  const [secondQuestionOrder, setSecondQuestionOrder] = useState(
    shuffleArray([0, 1, 2, 3])
  );

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

  useEffect(() => {
    const username = firebase.getCurrentUsername();
    firebase.db
      .collection("users")
      .doc(username)
      .get()
      .then(function(response) {
        setQuizPoints(response.data().points);
      });
  }, [quizPoints]);

  const handleClickOpen = () => {
    setOpenResults(true);
  };

  const handleClose = () => {
    setOpenResults(false);
  };

  const handleSubmit = () => {
    handleClickOpen(true);
    props.handleClose();
    updatePoints(getScore());
    const username = firebase.getCurrentUsername();
    firebase.db
      .collection("users")
      .doc(username)
      .collection("quizzesTaken")
      .doc(quiz.uid)
      .set({
        id: quiz.uid,
        articleTitle: quiz.articleTitle,
        articleURL: quiz.articleURL,
        completedAt: getDateAsString()
      });
  };

  const updatePoints = score => {
    const username = firebase.getCurrentUsername();
    firebase.db
      .collection("users")
      .doc(username)
      .set({
        points: quizPoints + score,
        username: firebase.getCurrentUsername(),
        picURL: firebase.getCurrentPhoto()
      });
  };

  const getScore = () => {
    let score = 0;
    if (answer1 === quiz.multipleChoiceQ1Answer) {
      score += 10;
    }
    if (answer2 === quiz.multipleChoiceQ2Answer) {
      score += 10;
    }
    if (answer3 === quiz.trueFalseQAnswer) {
      score += 10;
    }
    return score;
  };

  const getResultBox = (response, answer, questionNum) => {
    if (response === answer) {
      return (
        <DialogContent>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <DoneOutlineIcon color="primary" />
            </Grid>
            <Grid item>
              <DialogContentText>{`Question ${questionNum} Correct`}</DialogContentText>
            </Grid>
          </Grid>
        </DialogContent>
      );
    } else {
      return (
        <DialogContent>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <HighlightOffIcon color="primary" />
            </Grid>
            <Grid item>
              <DialogContentText>Question Incorrect</DialogContentText>
            </Grid>
          </Grid>
        </DialogContent>
      );
    }
  };

  const question1RadioGroup = () => {
    const answer = (
      <FormControlLabel
        value={quiz.multipleChoiceQ1Answer}
        control={<Radio />}
        label={quiz.multipleChoiceQ1Answer}
      />
    );

    const wrong1 = (
      <FormControlLabel
        value={quiz.multipleChoiceQ1Wrong1}
        control={<Radio />}
        label={quiz.multipleChoiceQ1Wrong1}
      />
    );

    const wrong2 = (
      <FormControlLabel
        value={quiz.multipleChoiceQ1Wrong2}
        control={<Radio />}
        label={quiz.multipleChoiceQ1Wrong2}
      />
    );

    const wrong3 = (
      <FormControlLabel
        value={quiz.multipleChoiceQ1Wrong3}
        control={<Radio />}
        label={quiz.multipleChoiceQ1Wrong3}
      />
    );

    const radioGroup = [0, 1, 2, 3];
    radioGroup[firstQuestionOrder[0]] = answer;
    radioGroup[firstQuestionOrder[1]] = wrong1;
    radioGroup[firstQuestionOrder[2]] = wrong2;
    radioGroup[firstQuestionOrder[3]] = wrong3;

    return (
      <RadioGroup
        aria-label="question1"
        name="question1"
        // value={value}
        onChange={e => setAnswer1(e.target.value)}
      >
        {radioGroup.map(radio => {
          return radio;
        })}
      </RadioGroup>
    );
  };

  const question2RadioGroup = () => {
    const answer = (
      <FormControlLabel
        value={quiz.multipleChoiceQ2Answer}
        control={<Radio />}
        label={quiz.multipleChoiceQ2Answer}
      />
    );

    const wrong1 = (
      <FormControlLabel
        value={quiz.multipleChoiceQ2Wrong1}
        control={<Radio />}
        label={quiz.multipleChoiceQ2Wrong1}
      />
    );

    const wrong2 = (
      <FormControlLabel
        value={quiz.multipleChoiceQ2Wrong2}
        control={<Radio />}
        label={quiz.multipleChoiceQ2Wrong2}
      />
    );

    const wrong3 = (
      <FormControlLabel
        value={quiz.multipleChoiceQ2Wrong3}
        control={<Radio />}
        label={quiz.multipleChoiceQ2Wrong3}
      />
    );

    const radioGroup = [0, 1, 2, 3];
    radioGroup[secondQuestionOrder[0]] = answer;
    radioGroup[secondQuestionOrder[1]] = wrong1;
    radioGroup[secondQuestionOrder[2]] = wrong2;
    radioGroup[secondQuestionOrder[3]] = wrong3;

    return (
      <RadioGroup
        aria-label="question2"
        name="question2"
        // value={value}
        onChange={e => setAnswer2(e.target.value)}
      >
        {radioGroup.map(radio => {
          return radio;
        })}
      </RadioGroup>
    );
  };

  return (
    <>
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
            {question1RadioGroup()}
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <DialogContentText>
              <h3>{quiz.multipleChoiceQ2}</h3>
            </DialogContentText>
            {question2RadioGroup()}
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
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="False"
              />
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
      <Dialog
        open={openResults}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {getResultBox(answer1, quiz.multipleChoiceQ1Answer, 1)}
        {getResultBox(answer2, quiz.multipleChoiceQ2Answer, 2)}
        {getResultBox(answer3, quiz.trueFalseQAnswer, 3)}
        <DialogContent>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <DialogContentText>{`You Scored ${getScore()} Points`}</DialogContentText>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

function shuffleArray(array) {
  console.log("SHUFFLING");
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
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
