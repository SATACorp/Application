import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "500px"
  },
  formControl: {
    margin: theme.spacing(3)
  },
  resultsText: {
    textAlign: "center"
  }
}));
