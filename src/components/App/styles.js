import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "center",
    height: "100%",
    maxWidth: "100%"
  },
  loader: {
    position: "fixed",
    top: "50%",
    left: "50%"
  }
}));
