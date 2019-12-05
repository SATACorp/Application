import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
    margin: "0 auto"
  },
  formControl: {
    margin: theme.spacing(3)
  },
  resultsText: {
    textAlign: "center"
  },
  submit: {
    margin: "0 auto"
  }
}));
