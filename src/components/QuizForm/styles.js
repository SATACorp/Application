import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "500px",
    width: "100%"
  },
  margin: {
    margin: theme.spacing(3)
  },
  quizSection: {
    margin: theme.spacing(1),
    width: "400px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  input: {
    width: "350px"
  }
}));
