import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  paper: {
    marginTop: theme.spacing(8),
    alignItems: "center"
  },

  checkUser: {
    margin: theme.spacing(3),
    alignItems: "center"
  }
}));
